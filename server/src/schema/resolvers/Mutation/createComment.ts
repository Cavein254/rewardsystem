import type { MutationResolvers } from "./../../types.generated";
export const createComment: NonNullable<
  MutationResolvers["createComment"]
> = async (_parent, arg, ctx) => {
  const { body, userId } = await arg.input;
  const { prisma } = ctx;
  const comment = await prisma.comment.create({
    data: arg?.input,
  });
  return {
    success: false,
    message: "Success",
  };
};
