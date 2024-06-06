import type   { QueryResolvers } from './../../types.generated';
        export const getCurrentUser: NonNullable<QueryResolvers['getCurrentUser']> = async (_parent, _arg, ctx) => { 
                console.log("Finding the user")
                const {prisma} = ctx;
                // const { userId } = await ctx.req.cookies.credentials;
                const userId = "clx1no90p0000bq7zukxze8q0"
                const user = await prisma.user.findFirst({
                        where: {
                                id:userId
                        }
                })
                console.log(user)
                return user
         };