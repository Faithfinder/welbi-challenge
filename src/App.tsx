import { ApolloProvider } from "@apollo/client";
import { Box, makeStyles } from "@material-ui/core";

import { client } from "./config/apollo/client";
import { List as ProgramList } from "./programs/List/List";
import { List as ResidentList } from "./residents/List/List";

import "./App.css";

const useStyles = makeStyles(({ spacing }) => ({
  grid: {
    width: "100%",
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: spacing(2),
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Box className={classes.grid}>
        <ResidentList />
        <ProgramList />
      </Box>
    </ApolloProvider>
  );
};
