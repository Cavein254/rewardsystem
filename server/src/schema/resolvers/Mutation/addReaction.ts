import { GraphQLError } from "graphql";
import { GraphQLContext } from "../../../types";
import type { MutationResolvers } from "./../../types.generated";
export const addReaction: NonNullable<MutationResolvers['addReaction']> = async (_parent, arg, { prisma }: GraphQLContext) => {
  const { postId, reactionType, userId } = arg.input;
  try {
    const existingReaction = await prisma.reaction.findUnique({
      where: {
        postId_userId_reactionType: {
          userId,
          postId,
          reactionType,
        },
      },
    });

    if (existingReaction) {
      await prisma.reaction.delete({
        where: {
          id: existingReaction.id,
        },
      });
      return {
        success: true,
        message: `Successfully removed ${reactionType}`,
      };
    }
    await prisma.reaction.create({
      data: {
        reactionType,
        post: {
          connect: {
            id: postId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return {
      success: true,
      message: `You reacted with ${reactionType}!`,
    };
  } catch (err) {
    return {
      success: false,
      message: "Error!Unable to connect to Database",
    };
  }
};
