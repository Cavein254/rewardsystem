import type { QueryResolvers } from "./../../types.generated";
export const getAllComments: NonNullable<QueryResolvers['getAllComments']> = async (_parent, _arg, ctx) => {
  const { prisma } = ctx;
  const comments = await prisma.comment.findMany();
  return comments;
};
