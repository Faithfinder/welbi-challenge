import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { EnumStatus } from "../../generated/graphql.types";
import { StatusSelect } from "./StatusSelect";
import { useEnrollMutation } from "./useEnrollMutation";

interface Props extends Omit<DialogProps, "onClose"> {
  onClose: () => void;
  residentId: string;
  programId: string;
}

const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
  },
  select: {
    flex: "1",
  },
}));

export const EnrollModal = ({
  onClose,
  residentId,
  programId,
  ...rest
}: Props) => {
  const classes = useStyles();
  const [status, setStatus] = useState(EnumStatus.Active);
  const [enroll] = useEnrollMutation(onClose);

  return (
    <Dialog onClose={onClose} {...rest}>
      <DialogTitle>Please select attendance status</DialogTitle>
      <DialogContent className={classes.body}>
        <StatusSelect
          className={classes.select}
          value={status}
          onChange={(e) => setStatus(e.target.value as EnumStatus)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() =>
            enroll({
              variables: { input: { residentId, programId, status } },
            })
          }
        >
          Enroll
        </Button>
      </DialogActions>
    </Dialog>
  );
};
