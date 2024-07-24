import type { MutationResolvers } from "./../../types.generated";
export const createComment: NonNullable<MutationResolvers['createComment']> = async (_parent, arg, _ctx) => {
  const { body, userId } = await arg.input;
  console.log(arg);
  return {
    success: false,
    message: "Success",
  };
};
