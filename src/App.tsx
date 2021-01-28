import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo/client";
import { ListView } from "./residents/ListView/ListView";

function App() {
  return (
    <ApolloProvider client={client}>
      <ListView />
    </ApolloProvider>
  );
}

export default App;
