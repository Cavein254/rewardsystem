import session from "express-session";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import path from "path";
import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import resolvers from "./resolvers";
import authRouter from "./route/auth.route";
import prisma from "./lib/prisma";
import { GraphQLContext } from "./types";
import cookieParser from "cookie-parser";

const mydirname = process.cwd();
const typeDefs = gql(
  readFileSync(path.resolve(mydirname, "./src/schema/schema.graphql"), {
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
      secure: true,
    },
  })
);
app.use(cookieParser());

// Define allowed origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:4000"];

// Create CORS options
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// };
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
// app.use(cors(corsOptions))

const httpServer = http.createServer(app);

const server = new ApolloServer<GraphQLContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>({
    origin: allowedOrigins,
    credentials: true,
  }),
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
