import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  label: string;
  data: string | null | undefined;
}

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: "bold",
  },
}));

export const InfoField: React.FC<Props> = ({ label, data }) => {
  const classes = useStyles();
  return (
    <Typography>
      <span className={classes.label}>{label}</span>
      {`: ${data ?? ""}`}
    </Typography>
  );
};
