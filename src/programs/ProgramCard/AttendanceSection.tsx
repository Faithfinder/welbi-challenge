import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { AttendanceFragment } from "../../generated/graphql.types";

interface Props {
  selectedResidentId: string | null;
  attendanceData: AttendanceFragment[];
}

const useStyles = makeStyles(({ spacing }) => ({
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
  attendanceData,
}) => {
  const classes = useStyles();
  const attendanceStatus = attendanceData.find(
    (element) => element.residentId === selectedResidentId
  )?.status;

  let content = (
    <Typography align="center">Select a resident to see attendance</Typography>
  );

  if (selectedResidentId && !attendanceStatus) {
    content = (
      <Button variant="contained" color="primary">
        Enroll
      </Button>
    );
  }

  if (attendanceStatus) {
    content = (
      <>
        <Typography variant="subtitle2">Attendance</Typography>
        <Typography>{attendanceStatus}</Typography>
      </>
    );
  }

  return <div className={classes.wrapper}>{content}</div>;
};
