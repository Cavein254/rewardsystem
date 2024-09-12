import { GraphQLContext } from "../../../types";
import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<
  QueryResolvers["getCurrentUser"]
> = async (_parent, _arg, ctx: GraphQLContext) => {
  const { prisma } = ctx;
  const id = await ctx.req.user;
  const credentials = await ctx.req.cookies.credentials;
  const userId = "cm0yxb76e0000juz9h56fvv2a";
  console.log("my user us still underfrof");
  console.log(id);
  console.log("my user us still underfrof");
  console.log(credentials);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};
