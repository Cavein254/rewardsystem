import { gql } from "graphql-tag";
export const GET_CURRENT_USER = gql(`
query GetCurrentUser {
    getCurrentUser {
    id
    name
    email
    image
    gender
  }
}
`);

export const GET_POST_DETAILS = gql(`
query GetPostDetails($postId:ID!) {
  getPostDetails(id: $postId) {
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
