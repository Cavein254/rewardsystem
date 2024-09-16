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

export const GET_MY_POST_REACTION = gql(`
  query GetMyPostReaction($postId: String!, $userId: String!) {
  getMyPostReaction(postId: $postId, userId: $userId) {
    reactionType
  }
}
`);
