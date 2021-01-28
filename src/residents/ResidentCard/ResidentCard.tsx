import { Chip, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { ResidentFragment } from "../../generated/graphql.types";
import { InfoField } from "../../shared/InfoField";
import { formatDate } from "../../shared/util";
import { AmbulationMap, LevelOfCareMap } from "../util";

interface Props {
  resident: ResidentFragment;
  selected?: boolean;
  onClick: (id: string) => void;
}

const useStyles = makeStyles(({ spacing }) => ({
  card: { padding: spacing(1) },
  headerRow: {
    marginBottom: spacing(1),
  },
  data: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const ResidentCard: React.FC<Props> = ({
  resident,
  selected,
  onClick,
}) => {
  const classes = useStyles();

  const onCardClick = () => {
    onClick(resident.id);
  };

  return (
    <Paper
      className={classes.card}
      elevation={selected ? 3 : 1}
      variant={selected ? "outlined" : "elevation"}
      onClick={onCardClick}
    >
      <Grid container justify="space-between" className={classes.headerRow}>
        <NameDisplay resident={resident} />
        <Chip label={resident.status} />
      </Grid>
      <Grid className={classes.data}>
        <InfoField label="Room" data={resident.room} />
        <InfoField
          label="Level of care"
          data={LevelOfCareMap[resident.levelOfCare!]?.displayValue}
        />
        <InfoField
          label="Ambulation"
          data={AmbulationMap[resident.ambulation!]?.displayValue}
        />
        <InfoField label="Birthday" data={formatDate(resident.birthDate)} />
        <InfoField label="Moved in" data={formatDate(resident.moveInDate)} />
      </Grid>
    </Paper>
  );
};

const NameDisplay: React.FC<Pick<Props, "resident">> = ({ resident }) => {
  const name = resident.preferredName
    ? `${resident.preferredName} (${resident.name})`
    : resident.name;
  return (
    <Typography variant="h6" component="header">
      {name}
    </Typography>
  );
};
