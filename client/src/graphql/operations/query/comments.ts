import gql from "graphql-tag";

export const GET_ALL_COMMENTS = gql(`
query GetAllComments {
  getAllComments {
    body
    createdAt
    id
    updatedAt
    postId
    user {
      name
    }
  }
}
`);

export const GET_POST_COMMENTS = gql(`
query GetPostComments($getPostCommentsId: String!) {
  getPostComments(postId: $getPostCommentsId) {
    id
    body
    createdAt
    updatedAt
    user {
        id
      name
    }
    postId
  }
}
`);
