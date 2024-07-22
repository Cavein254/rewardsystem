import { gql } from "graphql-tag";

export const CREATE_COMMENT = gql(`
mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    message
    success
  }
}
`);

export const DELETE_COMMENT = gql(`
mutation DeleteComment($input: ItemId!) {
  deleteComment(input: $input) {
    message
    success
  }
}
`);
