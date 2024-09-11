import type { QueryResolvers } from "./../../types.generated";
export const getCurrentUser: NonNullable<QueryResolvers['getCurrentUser']> = async (_parent, _arg, ctx) => {
  const { prisma } = ctx;
  const myuser = await ctx.req.user;
  const credentials = await ctx.req.cookies.credentials;
  const userId = "cm0xmkk18000013v6um9muzzq";
  console.log("my user us still underfrof");
  console.log(myuser);
  console.log("my user us still underfrof");
  console.log(credentials);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};
