import type { QueryResolvers } from "./../../types.generated";
export const getPostComments: NonNullable<QueryResolvers['getPostComments']> = async (_parent, arg, ctx) => {
  const { prisma } = ctx;
  const { postId } = arg;
  const postComments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return postComments;
};
