import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const VITE_GRAPHQL_URL: string = import.meta.env.VITE_GRAPHQL_URL as string;
const httpLink = new HttpLink({
  uri: VITE_GRAPHQL_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});