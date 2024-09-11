import { GraphQLContext } from "../../../types";
import type { MutationResolvers } from "./../../types.generated";
export const incrementPageView: NonNullable<
  MutationResolvers["incrementPageView"]
> = async (_parent, arg, ctx: GraphQLContext) => {
  console.log("increment pageviews called");
  const { postId } = arg;
  const { prisma } = ctx;
  try {
    const post = await prisma.post.update({
      where: {
        slug: postId,
      },
      data: { views: { increment: 1 } },
    });
    console.log(post);
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};
