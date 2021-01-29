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
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
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

  let content = <Typography>Select a resident to see attendance</Typography>;

  if (selectedResidentId && !attendanceStatus) {
    content = (
      <Button variant="contained" color="primary">
        Enroll
      </Button>
    );
  }

  if (attendanceStatus) {
    content = <>{attendanceStatus}</>;
  }

  return <div className={classes.wrapper}>{content}</div>;
};
