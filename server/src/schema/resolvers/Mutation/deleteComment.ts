import type { MutationResolvers } from "./../../types.generated";
export const deleteComment: NonNullable<MutationResolvers['deleteComment']> = async (_parent, arg, ctx) => {
  /* Implement Mutation.deleteComment resolver logic here */
  console.log("on page delete context");
  const { id } = arg.input;
  const { prisma } = ctx;
  const deleteComment = await prisma.comment.delete({
    where: {
      id,
    },
  });
  return {
    success: true,
  };
};
