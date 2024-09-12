import type { QueryResolvers } from "./../../types.generated";
export const getAllPosts: NonNullable<QueryResolvers['getAllPosts']> = async (
  _parent,
  _arg,
  ctx
) => {
  const { prisma } = ctx;
  const posts = await prisma.post.findMany({
    include: {
      _count: {
        select: { comments: true },
      },
      reactions: {
        select: { reactionType: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const postWithLove = posts.map((post) => {
    const lovePost = post.reactions.filter(
      (reaction) => reaction.reactionType === "LOVE"
    ).length;
    const hatePost = post.reactions.filter(
      (reaction) => reaction.reactionType === "HATE"
    ).length;
    return {
      ...post,
      lovePost,
      hatePost,
    };
  });
  return postWithLove;
};
