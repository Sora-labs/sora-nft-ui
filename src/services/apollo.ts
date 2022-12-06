import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "./near";

export const client = new ApolloClient({
  uri: `${config.apiUrl}/graphql`,
  cache: new InMemoryCache(),
});
