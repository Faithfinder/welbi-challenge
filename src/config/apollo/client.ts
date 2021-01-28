import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri:
    "https://cors-anywhere.herokuapp.com/https://welbi.org/api/graphql?token=1",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
