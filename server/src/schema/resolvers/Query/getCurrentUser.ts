import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<
  QueryResolvers["getCurrentUser"]
> = async (_parent, _arg, ctx) => {
  const { prisma } = ctx;
  const userId = "1";
  const userH = await ctx.req.user;
  console.log("Person user");
  console.log(userH);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};
