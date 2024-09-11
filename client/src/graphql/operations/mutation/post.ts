import gql from "graphql-tag";

export const INCREMENT_POST_VIEWS = gql(`
mutation IncrementPageView($postId: String) {
  incrementPageView(postId: $postId) {
    success
  }
}
`);
