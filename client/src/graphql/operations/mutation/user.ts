import { gql } from "graphql-tag";

export const CREATE_POST = gql(`
mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      message
      success
    }
  }  
  `);
