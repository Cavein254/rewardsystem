import { QueryResult } from "@apollo/client";
import gql from "graphql-tag";

export const GET_ALL_POSTS = gql(`
query GetAllPosts {
    getAllPosts {
        id
        title
        slug
        body
        published
        createdAt
        updatedAt
    }
}
`);

export const GET_POST_DETAILS = gql(`
query GetPostDetails($slug:String!) {
  getPostDetails(slug: $slug) {
    id
    title
    slug
    body
    published
    createdAt
    updatedAt
    comments {
      id
      body
      createdAt
      updatedAt
      postId
      user {
        id
        name
      }
    }
    user {
      id
      name
      email
      image
    }
    
  }
}
`);

export type PostDetailsRefetch = QueryResult<
  typeof GET_POST_DETAILS
>["refetch"];
