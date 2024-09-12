import { GraphQLContext } from "../../../types";
import type { QueryResolvers } from "./../../types.generated";
export const getMyPostReaction: NonNullable<
  QueryResolvers["getMyPostReaction"]
> = async (_parent, { postId, userId }, { prisma }: GraphQLContext) => {
  console.log("on get post reaction");
  const reaction = await prisma.reaction.findMany({
    where: {
      userId,
      postId,
    },
  });
  console.log(reaction);
  return reaction;
};
