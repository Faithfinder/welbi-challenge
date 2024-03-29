import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { typePolicies } from "./typePolicies";

const httpLink = new HttpLink({
  uri:
    "https://welbi.org/api/graphql",
  headers: { "Authorization": `Bearer f4df52a9-b9da-41af-9f12-887a3336fcf2` }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies,
  }),
});
