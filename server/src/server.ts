import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import http from "http";
import cors from "cors";
import path from "path";
import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import resolvers from "./resolvers";
import authRouter from "./route/auth.route";
import prisma from "./lib/prisma";
import { GraphQLContext } from "./types";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import * as dotenv from "dotenv";

dotenv.config().parsed;

const mydirname = process.cwd();
const typeDefs = gql(
  readFileSync(path.resolve(mydirname, "./src/schema/schema.graphql"), {
    encoding: "utf-8",
  })
);

const app = express();

app.use(cookieParser());

app.use(
  expressSession({
    cookie: {
      maxAge: 21 * 24 * 60 * 60 * 1000, // 21 days
    },
    secret: "a santa at nasa",
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

const httpServer = http.createServer(app);
async function startApolloServer() {
  const server = new ApolloServer<GraphQLContext>({
    typeDefs,
    resolvers,
    // required for passport req.user access
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: "my-graph-id@my-graph-variant",
            footer: false,
            includeCookies: true,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });
  await server.start();

  // Define allowed origins
  const corsOptions = {
    origin: [
      "http://localhost:5173",
      "http://localhost:4000",
      "http://localhost:4000/graphql",
    ],
    credentials: true,
  };

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(corsOptions),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }): Promise<GraphQLContext> => ({
        prisma,
        req,
      }),
    })
  );

  app.use("/", authRouter);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/`);
}
startApolloServer().catch(console.error);
