import gql from "graphql-tag";

export const ADD_POST_REACTION = gql(`
    mutation AddReaction($input: AddReactionInput!) {
    addReaction(input: $input) {
      success
      message
    }
  }
    `);
