import type { MutationResolvers } from "./../../types.generated";
export const createPost: NonNullable<MutationResolvers["createPost"]> = async (
  _parent,
  arg,
  ctx
) => {
  const { title, body, author, slug } = arg.input;
  console.log({
    title,
    body,
    author,
    slug,
  });
  const post = await ctx.prisma.post.create({
    data: {
      title,
      body,
      userId: author,
      slug,
    },
  });
  console.log(post);
  return { message: "Success", success: true };
};
