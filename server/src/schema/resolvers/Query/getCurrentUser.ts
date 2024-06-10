import type   { QueryResolvers } from './../../types.generated';
        export const getCurrentUser: NonNullable<QueryResolvers['getCurrentUser']> = async (_parent, _arg, ctx) => { 
                console.log("Finding the user")
                console.log("logging user id");
                const {prisma} = ctx;
                const {userId} = await ctx.req.cookies.credentials;
                console.log(userId)
                const user = await prisma.user.findFirst({
                        where: {
                                id:userId
                        }
                })
                console.log(user)
                return user
         };