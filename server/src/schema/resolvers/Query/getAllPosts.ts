import type   { QueryResolvers } from './../../types.generated';
        export const getAllPosts: NonNullable<QueryResolvers['getAllPosts']> = async (_parent, _arg, ctx) => {
                console.log("getting posts")
                const {prisma} = ctx;
                const posts = await prisma.post.findMany({
                        include: {
                                comments:true
                        }
                });
                return posts;
         };