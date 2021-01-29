import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { isSameDay } from "date-fns";
import { ProgramFragment } from "../../generated/graphql.types";
import { InfoField } from "../../shared/InfoField";
import { formatDateTime, formatDate, formatTime } from "../../shared/util";
import { AttendanceSection } from "./AttendanceSection";

interface Props {
  program: ProgramFragment;
  selectedResidentId: string | null;
}

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(2),
    margin: spacing(1, 0),
    display: "flex",
  },
  headerRow: {
    marginBottom: spacing(1),
  },
  divider: {
    margin: spacing(0, 2),
  },
  data: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: spacing(1),
  },
}));

export const ProgramCard: React.FC<Props> = ({
  program,
  selectedResidentId,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <Grid container direction="column" wrap="nowrap">
        <Grid
          container
          justify="space-between"
          alignItems="baseline"
          className={classes.headerRow}
        >
          <Typography variant="h6" component="header">
            {program.name}
          </Typography>
          <ProgramPeriodDisplay program={program} />
        </Grid>
        <section className={classes.data}>
          <InfoField label="Location" data={program.location} />
          <InfoField label="Dimension" data={program.dimension} />
          <InfoField label="Hobbies" data={program.hobbies.join(", ")} />
          <InfoField
            label="Facilitators"
            data={program.facilitators.join(", ")}
          />
          <InfoField
            label="Level of care"
            data={program.levelOfCare.join(", ")}
          />
          <InfoField label="Tags" data={program.tags.join(", ")} />
        </section>
      </Grid>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <AttendanceSection
        selectedResidentId={selectedResidentId}
        attendanceData={program.attendance}
      />
    </Paper>
  );
};

const ProgramPeriodDisplay: React.FC<Pick<Props, "program">> = ({
  program,
}) => {
  const startDate = new Date(program.start);
  const endDate = new Date(program.end);
  const sameDay = isSameDay(startDate, endDate);

  let periodDisplay = `${formatDateTime(startDate)} - ${formatDateTime(
    endDate
  )}`;

  if (sameDay && program.allDay) {
    periodDisplay = formatDate(startDate);
  }

  if (sameDay && !program.allDay) {
    periodDisplay = `${formatDate(startDate)} ${formatTime(
      startDate
    )} - ${formatTime(endDate)}`;
  }

  return <Typography variant="caption">{periodDisplay}</Typography>;
};
