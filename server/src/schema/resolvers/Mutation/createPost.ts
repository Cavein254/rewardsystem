import type { MutationResolvers } from "./../../types.generated";
export const createPost: NonNullable<MutationResolvers['createPost']> = async (
  _parent,
  arg,
  ctx
) => {
  const { title, body, author, slug } = arg.input;

  try {
    const post = await ctx.prisma.post.create({
      data: {
        title,
        body,
        userId: author,
        slug,
      },
    });
    return { message: "Success", success: true };
  } catch (err) {
    if (err.code === "P2002") {
      return {
        success: false,
        message: "Error! A post with a similar title exist",
      };
    }
    return {
      success: false,
      message: "Error! Unable to create post",
    };
  }
};
