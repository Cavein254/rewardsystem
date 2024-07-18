import type { MutationResolvers } from "./../../types.generated";
export const createPost: NonNullable<MutationResolvers["createPost"]> = async (
  _parent,
  arg,
  _ctx
) => {
  //   const { title, body, author, slug } = arg;
  //   console.log({
  //     title,
  //     body,
  //     author,
  //     slug,
  //   });
  console.log("Printing Arguments");
  console.log(arg);
};
