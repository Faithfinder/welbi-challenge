import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { EnumStatus, ProgramFragment } from "../../generated/graphql.types";
import { EnrollModal } from "./EnrollModal";
import { StatusSelect } from "./StatusSelect";
import { useEnrollMutation } from "./useEnrollMutation";

interface Props {
  selectedResidentId: string | null;
  program: ProgramFragment;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
  },
}));

export const AttendanceSection: React.FC<Props> = ({
  selectedResidentId,
  program,
}) => {
  const classes = useStyles();
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  const attendanceStatus = program.attendance.find(
    (element) => element.residentId === selectedResidentId
  )?.status;

  const [enroll, { loading }] = useEnrollMutation();

  let content = (
    <Typography align="center">Select a resident to see attendance</Typography>
  );

  if (selectedResidentId && !attendanceStatus) {
    content = (
      <Button
        variant="contained"
        color="primary"
        onClick={() => setEnrollModalOpen(true)}
      >
        Enroll
      </Button>
    );
  }

  if (selectedResidentId && attendanceStatus) {
    content = (
      <>
        <Typography variant="subtitle2">Attendance</Typography>
        <Typography>
          <StatusSelect
            disabled={loading}
            value={attendanceStatus}
            onChange={(e) =>
              enroll({
                variables: {
                  input: {
                    residentId: selectedResidentId,
                    programId: program.id,
                    status: e.target.value as EnumStatus,
                  },
                },
              })
            }
          />
        </Typography>
      </>
    );
  }

  return (
    <>
      <EnrollModal
        open={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        residentId={selectedResidentId!}
        programId={program.id}
      />
      <div className={classes.wrapper}>{content}</div>
    </>
  );
};
