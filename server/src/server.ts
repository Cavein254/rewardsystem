import session from "express-session";
import passport from "passport";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import path from "path";
import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers";

const mydirname = process.cwd();
const typeDefs = gql(
  readFileSync(path.resolve(mydirname, "./src/schema.graphql"), {
    encoding: "utf-8",
  })
);

const app = express();
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    cookie: {
      secure: false,
    },
  })
);
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  "/",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/`);
