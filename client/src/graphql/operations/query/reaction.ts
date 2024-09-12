import gql from "graphql-tag";

export const GET_POST_REACTION = gql(`
query GetPostReactions($postId: String!) {
  getPostReactions(postId: $postId) {
    data {
      count
      reactionType
    }
    message
    success
  }
}
`);
