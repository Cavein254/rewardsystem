import type { QueryResolvers } from "./../../types.generated";
export const getPostDetails: NonNullable<
  QueryResolvers["getPostDetails"]
> = async (_parent, arg, ctx) => {
  console.log("post details");
  const { slug } = arg;
  const { prisma } = ctx;

  const postDetails = await prisma.post.findUnique({
    where: {
      slug,
    },
    include: {
      user: true,
      comments: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: true,
        },
      },
    },
  });
  return postDetails;
};
