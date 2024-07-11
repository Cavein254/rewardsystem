import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<
  QueryResolvers["getCurrentUser"]
> = async (_parent, _arg, ctx) => {
  console.log("Finding the user");
  console.log("logging user id");
  const { prisma } = ctx;
  const cookieCredentials = await ctx.req.cookies.credentials;
  console.log(cookieCredentials);
  const userId = 1;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  console.log(user);
  return userId;
};
