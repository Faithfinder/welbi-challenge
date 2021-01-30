import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import React from "react";

interface Props extends Omit<DialogProps, "onClose"> {
  onClose: () => void;
}

const useStyles = makeStyles(() => ({
  body: {
    display: "flex",
  },
  select: {
    flex: "1",
  },
}));

export const AddModal = ({ onClose, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} {...rest}>
      <DialogTitle>Add program</DialogTitle>
      <DialogContent className={classes.body}>Hello</DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
