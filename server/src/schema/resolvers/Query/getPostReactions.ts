import { GraphQLContext } from "../../../types";
import type { QueryResolvers } from "./../../types.generated";
export const getPostReactions: NonNullable<QueryResolvers['getPostReactions']> = async (_parent, { postId }, { prisma }: GraphQLContext) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (!post) {
      return {
        success: false,
        message: "Post not found!",
      };
    }
    const reactionCount = await prisma.reaction.groupBy({
      by: ["reactionType"],
      where: { postId },
      _count: {
        reactionType: true,
      },
    });
    const formattedReactions = reactionCount.map((reaction) => ({
      reactionType: reaction.reactionType,
      count: reaction._count.reactionType,
    }));
    return {
      success: true,
      data: formattedReactions,
    };
  } catch (err) {
    return {
      success: false,
      message: "Error! Unable to connect to database",
    };
  }
};
