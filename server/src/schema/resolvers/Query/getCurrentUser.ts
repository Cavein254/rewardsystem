import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<
  QueryResolvers["getCurrentUser"]
> = async (_parent, _arg, ctx) => {
  const { prisma } = ctx;
  console.log("Finding the user");
  console.log("logging user id");
  const all = await ctx.req.cookies.credentials;
  const myUser = await ctx.req.user;
  const { userId } = await ctx.req?.cookies?.credentials;
  console.log(all);
  console.log(myUser);
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
