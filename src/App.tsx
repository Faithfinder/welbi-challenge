import { ApolloProvider } from "@apollo/client";
import { Container, Divider, makeStyles } from "@material-ui/core";

import { client } from "./config/apollo/client";
import { List as ProgramList } from "./programs/List/List";
import { List as ResidentList } from "./residents/List/List";

import "./App.css";
import { useState } from "react";

const useStyles = makeStyles(({ spacing }) => ({
  grid: {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gridTemplateRows: "100%",
    gap: spacing(2),
    overflow: "hidden",
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();
  const [selectedResidentId, setSelectedResidentId] = useState<string | null>(
    null
  );

  return (
    <ApolloProvider client={client}>
      <Container disableGutters className={classes.grid}>
        <ResidentList
          selectedResidentId={selectedResidentId}
          setSelectedResidentId={setSelectedResidentId}
        />
        <Divider orientation="vertical" />
        <ProgramList selectedResidentId={selectedResidentId} />
      </Container>
    </ApolloProvider>
  );
};
