import { ListView } from "../../shared/ListView";
import { useResidentsListQuery } from "../../generated/graphql.types";
import { ResidentCard } from "../ResidentCard/ResidentCard";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { AddModal } from "../AddModal/AddModal";
import { useState } from "react";

interface Props {
  selectedResidentId: string | null;
  setSelectedResidentId: React.Dispatch<string | null>;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexFlow: "column nowrap",
  },
}));

export const List: React.FC<Props> = ({
  selectedResidentId,
  setSelectedResidentId,
}) => {
  const classes = useStyles();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { data, loading, error } = useResidentsListQuery();

  if (error) throw error;

  return (
    <>
      <AddModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
      <div className={classes.wrapper}>
        <Grid
          container
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h2">Residents</Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Add />}
            onClick={() => setAddModalOpen(true)}
          >
            Add
          </Button>
        </Grid>
        <ListView loading={loading}>
          {data?.residents?.map((resident) => (
            <ResidentCard
              resident={resident}
              key={resident.id}
              selected={resident.id === selectedResidentId}
              onClick={setSelectedResidentId}
            />
          ))}
        </ListView>
      </div>
    </>
  );
};
