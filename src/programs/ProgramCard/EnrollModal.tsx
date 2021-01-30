import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  AttendanceInput,
  EnumStatus,
  ProgramAttendanceFragment,
  ProgramAttendanceFragmentDoc,
  useEnrollMutation,
} from "../../generated/graphql.types";

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
  const [enroll] = useConfiguredEnrollMutation(
    { residentId, programId, status },
    onClose
  );

  return (
    <Dialog onClose={onClose} {...rest}>
      <DialogTitle>Please select attendance status</DialogTitle>
      <DialogContent className={classes.body}>
        {`Resident: ${residentId}, program: ${programId}`}
        <Select
          className={classes.select}
          value={status}
          onChange={(e) => setStatus(e.target.value as EnumStatus)}
        >
          {Object.keys(EnumStatus).map((key) => {
            const status = EnumStatus[key as keyof typeof EnumStatus];
            return (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            );
          })}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => enroll()}>
          Enroll
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useConfiguredEnrollMutation = (
  { residentId, programId, status }: AttendanceInput,
  onCompleted: () => void
) =>
  useEnrollMutation({
    variables: {
      input: {
        residentId,
        programId,
        status,
      },
    },
    update: (cache, result) => {
      if (result.data) {
        const currentProgram = cache.readFragment<ProgramAttendanceFragment>({
          id: `Program:${programId}`,
          fragment: ProgramAttendanceFragmentDoc,
        });

        cache.writeFragment({
          id: `Program:${programId}`,
          fragment: ProgramAttendanceFragmentDoc,
          data: {
            attendance: [
              ...(currentProgram?.attendance ?? []),
              result.data.setAttendance,
            ],
          },
        });
      }
    },
    onCompleted,
  });
