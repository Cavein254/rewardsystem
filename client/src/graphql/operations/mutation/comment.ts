import { gql } from "graphql-tag";

export const CREATE_COMMENT = gql(`
mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    message
    success
  }
}
`);
