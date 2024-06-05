import type   { QueryResolvers } from './../../types.generated';
        export const getCurrentUser: NonNullable<QueryResolvers['getCurrentUser']> = async (_parent, _arg, ctx) => { 
                const {prisma} = ctx;
                console.log("on the fucking route")
                // const { userId } = await ctx.req.cookies.credentials;
                const userId = "clx1no90p0000bq7zukxze8q0"
                const user = await prisma.user.findFirst({
                        where: {
                                id:userId
                        }
                })
                return user
         };