import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { isSameDay } from "date-fns";
import { ProgramFragment } from "../../generated/graphql.types";
import { LevelOfCareMap } from "../../residents/util";
import { InfoField } from "../../shared/InfoField";
import { formatDateTime, formatDate, formatTime } from "../../shared/util";

interface Props {
  program: ProgramFragment;
}

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    padding: spacing(2),
    margin: spacing(1, 0),
  },
  headerRow: {
    marginBottom: spacing(1),
  },
  data: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: spacing(1),
  },
}));

export const ProgramCard: React.FC<Props> = ({ program }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
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
      <Box className={classes.data}>
        <InfoField label="Location" data={program.location} />
        <InfoField label="Dimension" data={program.dimension} />
        <InfoField label="Hobbies" data={program.hobbies.join(", ")} />
        <InfoField
          label="Facilitators"
          data={program.facilitators.join(", ")}
        />
        <InfoField
          label="Level of care"
          data={program.levelOfCare
            .map((level) => LevelOfCareMap[level].displayValue)
            .join(", ")}
        />
        <InfoField label="Tags" data={program.tags.join(", ")} />
      </Box>
    </Paper>
  );
};

const ProgramPeriodDisplay: React.FC<Props> = ({ program }) => {
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
