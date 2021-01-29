import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import { useProgramsListQuery } from "../../generated/graphql.types";
import { ListView } from "../../shared/ListView";
import { ProgramCard } from "../ProgramCard/ProgramCard";

interface Props {
  selectedResidentId: string | null;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexFlow: "column nowrap",
  },
}));

export const List: React.FC<Props> = ({ selectedResidentId }) => {
  const classes = useStyles();
  const { data, loading, error } = useProgramsListQuery();

  if (error) throw error;

  return (
    <div className={classes.wrapper}>
      <Grid container wrap="nowrap" justify="space-between" alignItems="center">
        <Typography variant="h2">Programs</Typography>
        <Button variant="outlined" color="primary" startIcon={<Add />}>
          Add
        </Button>
      </Grid>
      <ListView loading={loading}>
        {data?.programs?.map((program) => (
          <ProgramCard
            program={program}
            key={program.id}
            selectedResidentId={selectedResidentId}
          />
        ))}
      </ListView>
    </div>
  );
};
