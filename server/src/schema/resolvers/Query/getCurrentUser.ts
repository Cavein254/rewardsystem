import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<
  QueryResolvers["getCurrentUser"]
> = async (_parent, _arg, ctx) => {
  const { prisma } = ctx;
  const userId = ctx?.currentUser?.id;
  console.log("Getting the current user");
  console.log(ctx?.currentUser);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: {
        take: 1,
        orderBy: { createdAt: "asc" },
      },
    },
  });
  return user;
};
