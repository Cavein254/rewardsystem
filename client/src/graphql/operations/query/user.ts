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
