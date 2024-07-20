import type { QueryResolvers } from "./../../types.generated";
export const getPostDetails: NonNullable<QueryResolvers['getPostDetails']> = async (_parent, arg, _ctx) => {
  console.log("post details");
  console.log(arg);
};
