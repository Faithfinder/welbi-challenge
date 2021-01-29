import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  loading: boolean;
}

const useStyles = makeStyles(({ spacing }) => ({
  list: {
    flex: 1,
    overflowY: "auto",
    padding: spacing(1),
  },
}));

export const ListView: React.FC<Props> = ({ loading, children }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.list} wrap="nowrap">
      {loading ? <>Loading...</> : children}
    </Grid>
  );
};
