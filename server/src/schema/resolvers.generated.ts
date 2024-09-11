/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { getAllComments as Query_getAllComments } from './resolvers/Query/getAllComments';
import    { getAllPosts as Query_getAllPosts } from './resolvers/Query/getAllPosts';
import    { getAllUsers as Query_getAllUsers } from './resolvers/Query/getAllUsers';
import    { getCurrentUser as Query_getCurrentUser } from './resolvers/Query/getCurrentUser';
import    { getPostComments as Query_getPostComments } from './resolvers/Query/getPostComments';
import    { getPostDetails as Query_getPostDetails } from './resolvers/Query/getPostDetails';
import    { healthCheck as Query_healthCheck } from './resolvers/Query/healthCheck';
import    { hello as Query_hello } from './resolvers/Query/hello';
import    { createComment as Mutation_createComment } from './resolvers/Mutation/createComment';
import    { createPost as Mutation_createPost } from './resolvers/Mutation/createPost';
import    { deleteComment as Mutation_deleteComment } from './resolvers/Mutation/deleteComment';
import    { incrementPageView as Mutation_incrementPageView } from './resolvers/Mutation/incrementPageView';
import    { Comment } from './resolvers/Comment';
import    { Post } from './resolvers/Post';
import    { PostDetails } from './resolvers/PostDetails';
import    { SuccessResults } from './resolvers/SuccessResults';
import    { User } from './resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getAllComments: Query_getAllComments,getAllPosts: Query_getAllPosts,getAllUsers: Query_getAllUsers,getCurrentUser: Query_getCurrentUser,getPostComments: Query_getPostComments,getPostDetails: Query_getPostDetails,healthCheck: Query_healthCheck,hello: Query_hello },
      Mutation: { createComment: Mutation_createComment,createPost: Mutation_createPost,deleteComment: Mutation_deleteComment,incrementPageView: Mutation_incrementPageView },
      
      Comment: Comment,
Post: Post,
PostDetails: PostDetails,
SuccessResults: SuccessResults,
User: User
    }