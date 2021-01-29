import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  loading: boolean;
}

const useStyles = makeStyles(() => ({
  list: {
    overflowY: "auto",
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
