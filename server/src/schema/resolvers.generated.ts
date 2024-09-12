/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { getAllComments as Query_getAllComments } from './resolvers/Query/getAllComments';
import    { getAllPosts as Query_getAllPosts } from './resolvers/Query/getAllPosts';
import    { getAllUsers as Query_getAllUsers } from './resolvers/Query/getAllUsers';
import    { getCurrentUser as Query_getCurrentUser } from './resolvers/Query/getCurrentUser';
import    { getPostComments as Query_getPostComments } from './resolvers/Query/getPostComments';
import    { getPostDetails as Query_getPostDetails } from './resolvers/Query/getPostDetails';
import    { getPostReactions as Query_getPostReactions } from './resolvers/Query/getPostReactions';
import    { healthCheck as Query_healthCheck } from './resolvers/Query/healthCheck';
import    { hello as Query_hello } from './resolvers/Query/hello';
import    { addReaction as Mutation_addReaction } from './resolvers/Mutation/addReaction';
import    { createComment as Mutation_createComment } from './resolvers/Mutation/createComment';
import    { createPost as Mutation_createPost } from './resolvers/Mutation/createPost';
import    { deleteComment as Mutation_deleteComment } from './resolvers/Mutation/deleteComment';
import    { incrementPageView as Mutation_incrementPageView } from './resolvers/Mutation/incrementPageView';
import    { Comment } from './resolvers/Comment';
import    { CommentCount } from './resolvers/CommentCount';
import    { Post } from './resolvers/Post';
import    { PostDetails } from './resolvers/PostDetails';
import    { Reaction } from './resolvers/Reaction';
import    { ReactionCount } from './resolvers/ReactionCount';
import    { SuccessReactionResults } from './resolvers/SuccessReactionResults';
import    { SuccessResults } from './resolvers/SuccessResults';
import    { User } from './resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getAllComments: Query_getAllComments,getAllPosts: Query_getAllPosts,getAllUsers: Query_getAllUsers,getCurrentUser: Query_getCurrentUser,getPostComments: Query_getPostComments,getPostDetails: Query_getPostDetails,getPostReactions: Query_getPostReactions,healthCheck: Query_healthCheck,hello: Query_hello },
      Mutation: { addReaction: Mutation_addReaction,createComment: Mutation_createComment,createPost: Mutation_createPost,deleteComment: Mutation_deleteComment,incrementPageView: Mutation_incrementPageView },
      
      Comment: Comment,
CommentCount: CommentCount,
Post: Post,
PostDetails: PostDetails,
Reaction: Reaction,
ReactionCount: ReactionCount,
SuccessReactionResults: SuccessReactionResults,
SuccessResults: SuccessResults,
User: User
    }