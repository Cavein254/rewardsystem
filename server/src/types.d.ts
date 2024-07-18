import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
// import { PubSub } from "graphql-subscriptions";
export interface GraphQLContext {
  prisma: PrismaClient;
  req?: Request;
  // pubsub: PubSub;
}
