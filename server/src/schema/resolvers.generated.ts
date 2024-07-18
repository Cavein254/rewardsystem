/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { getAllPosts as Query_getAllPosts } from './resolvers/Query/getAllPosts';
import    { getAllUsers as Query_getAllUsers } from './resolvers/Query/getAllUsers';
import    { getCurrentUser as Query_getCurrentUser } from './resolvers/Query/getCurrentUser';
import    { healthCheck as Query_healthCheck } from './resolvers/Query/healthCheck';
import    { hello as Query_hello } from './resolvers/Query/hello';
import    { createPost as Mutation_createPost } from './resolvers/Mutation/createPost';
import    { Comment } from './resolvers/Comment';
import    { Post } from './resolvers/Post';
import    { SuccessResults } from './resolvers/SuccessResults';
import    { User } from './resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getAllPosts: Query_getAllPosts,getAllUsers: Query_getAllUsers,getCurrentUser: Query_getCurrentUser,healthCheck: Query_healthCheck,hello: Query_hello },
      Mutation: { createPost: Mutation_createPost },
      
      Comment: Comment,
Post: Post,
SuccessResults: SuccessResults,
User: User
    }