/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    message\n    success\n  }\n}\n": types.CreateCommentDocument,
    "\nmutation DeleteComment($input: ItemId!) {\n  deleteComment(input: $input) {\n    message\n    success\n  }\n}\n": types.DeleteCommentDocument,
    "\nmutation IncrementPageView($postId: String) {\n  incrementPageView(postId: $postId) {\n    success\n  }\n}\n": types.IncrementPageViewDocument,
    "\nmutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      message\n      success\n    }\n  }  \n  ": types.CreatePostDocument,
    "\nquery GetAllComments {\n  getAllComments {\n    body\n    createdAt\n    id\n    updatedAt\n    postId\n    user {\n      name\n    }\n  }\n}\n": types.GetAllCommentsDocument,
    "\nquery GetPostComments($getPostCommentsId: String!) {\n  getPostComments(postId: $getPostCommentsId) {\n    id\n    body\n    createdAt\n    updatedAt\n    user {\n        id\n      name\n    }\n    postId\n  }\n}\n": types.GetPostCommentsDocument,
    "\nquery GetAllPosts {\n    getAllPosts {\n        id\n        title\n        slug\n        views\n        body\n        _count {\n          comments\n        }\n        published\n        createdAt\n        updatedAt\n        lovePost\n        hatePost\n    }\n}\n": types.GetAllPostsDocument,
    "\nquery GetPostDetails($slug:String!) {\n  getPostDetails(slug: $slug) {\n    id\n    title\n    slug\n    body\n    views\n    published\n    createdAt\n    updatedAt\n    comments {\n      id\n      body\n      createdAt\n      updatedAt\n      postId\n      user {\n        id\n        name\n      }\n    }\n    user {\n      id\n      name\n      email\n      image\n    }\n    \n  }\n}\n": types.GetPostDetailsDocument,
    "\nquery GetPostReactions($postId: String!) {\n  getPostReactions(postId: $postId) {\n    data {\n      count\n      reactionType\n    }\n    message\n    success\n  }\n}\n": types.GetPostReactionsDocument,
    "\n  query GetMyPostReaction($postId: String!, $userId: String!) {\n  getMyPostReaction(postId: $postId, userId: $userId) {\n    reactionType\n  }\n}\n": types.GetMyPostReactionDocument,
    "\nquery GetCurrentUser {\n    getCurrentUser {\n    id\n    name\n    email\n    image\n    gender\n  }\n}\n": types.GetCurrentUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    message\n    success\n  }\n}\n"): (typeof documents)["\nmutation CreateComment($input: CreateCommentInput!) {\n  createComment(input: $input) {\n    message\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteComment($input: ItemId!) {\n  deleteComment(input: $input) {\n    message\n    success\n  }\n}\n"): (typeof documents)["\nmutation DeleteComment($input: ItemId!) {\n  deleteComment(input: $input) {\n    message\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation IncrementPageView($postId: String) {\n  incrementPageView(postId: $postId) {\n    success\n  }\n}\n"): (typeof documents)["\nmutation IncrementPageView($postId: String) {\n  incrementPageView(postId: $postId) {\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      message\n      success\n    }\n  }  \n  "): (typeof documents)["\nmutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      message\n      success\n    }\n  }  \n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetAllComments {\n  getAllComments {\n    body\n    createdAt\n    id\n    updatedAt\n    postId\n    user {\n      name\n    }\n  }\n}\n"): (typeof documents)["\nquery GetAllComments {\n  getAllComments {\n    body\n    createdAt\n    id\n    updatedAt\n    postId\n    user {\n      name\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetPostComments($getPostCommentsId: String!) {\n  getPostComments(postId: $getPostCommentsId) {\n    id\n    body\n    createdAt\n    updatedAt\n    user {\n        id\n      name\n    }\n    postId\n  }\n}\n"): (typeof documents)["\nquery GetPostComments($getPostCommentsId: String!) {\n  getPostComments(postId: $getPostCommentsId) {\n    id\n    body\n    createdAt\n    updatedAt\n    user {\n        id\n      name\n    }\n    postId\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetAllPosts {\n    getAllPosts {\n        id\n        title\n        slug\n        views\n        body\n        _count {\n          comments\n        }\n        published\n        createdAt\n        updatedAt\n        lovePost\n        hatePost\n    }\n}\n"): (typeof documents)["\nquery GetAllPosts {\n    getAllPosts {\n        id\n        title\n        slug\n        views\n        body\n        _count {\n          comments\n        }\n        published\n        createdAt\n        updatedAt\n        lovePost\n        hatePost\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetPostDetails($slug:String!) {\n  getPostDetails(slug: $slug) {\n    id\n    title\n    slug\n    body\n    views\n    published\n    createdAt\n    updatedAt\n    comments {\n      id\n      body\n      createdAt\n      updatedAt\n      postId\n      user {\n        id\n        name\n      }\n    }\n    user {\n      id\n      name\n      email\n      image\n    }\n    \n  }\n}\n"): (typeof documents)["\nquery GetPostDetails($slug:String!) {\n  getPostDetails(slug: $slug) {\n    id\n    title\n    slug\n    body\n    views\n    published\n    createdAt\n    updatedAt\n    comments {\n      id\n      body\n      createdAt\n      updatedAt\n      postId\n      user {\n        id\n        name\n      }\n    }\n    user {\n      id\n      name\n      email\n      image\n    }\n    \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetPostReactions($postId: String!) {\n  getPostReactions(postId: $postId) {\n    data {\n      count\n      reactionType\n    }\n    message\n    success\n  }\n}\n"): (typeof documents)["\nquery GetPostReactions($postId: String!) {\n  getPostReactions(postId: $postId) {\n    data {\n      count\n      reactionType\n    }\n    message\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMyPostReaction($postId: String!, $userId: String!) {\n  getMyPostReaction(postId: $postId, userId: $userId) {\n    reactionType\n  }\n}\n"): (typeof documents)["\n  query GetMyPostReaction($postId: String!, $userId: String!) {\n  getMyPostReaction(postId: $postId, userId: $userId) {\n    reactionType\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetCurrentUser {\n    getCurrentUser {\n    id\n    name\n    email\n    image\n    gender\n  }\n}\n"): (typeof documents)["\nquery GetCurrentUser {\n    getCurrentUser {\n    id\n    name\n    email\n    image\n    gender\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;