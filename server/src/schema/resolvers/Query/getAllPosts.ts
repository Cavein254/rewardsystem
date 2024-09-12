import type { QueryResolvers } from "./../../types.generated";
export const getAllPosts: NonNullable<QueryResolvers["getAllPosts"]> = async (
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
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
};
