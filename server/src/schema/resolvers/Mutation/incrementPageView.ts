import { GraphQLContext } from "../../../types";
import type { MutationResolvers } from "./../../types.generated";
export const incrementPageView: NonNullable<
  MutationResolvers["incrementPageView"]
> = async (_parent, arg, ctx: GraphQLContext) => {
  const { postId } = arg;
  const { prisma } = ctx;
  try {
    await prisma.post.update({
      where: {
        slug: postId,
      },
      data: { views: { increment: 1 } },
    });
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};
