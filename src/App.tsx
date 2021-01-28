import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo/client";
import { List } from "./residents/List/List";

function App() {
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
}

export default App;
