import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<
  QueryResolvers["getCurrentUser"]
> = async (_parent, _arg, ctx) => {
  const { prisma } = ctx;
  // const userId = "clygzqm450000f79uicq5aze8";
  const { userId } = await ctx.req.cookies.user;
  console.log("using userId");
  console.log(userId);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};
