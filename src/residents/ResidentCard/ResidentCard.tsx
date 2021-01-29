import {
  Box,
  Chip,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { ResidentFragment } from "../../generated/graphql.types";
import { InfoField } from "../../shared/InfoField";
import { formatDate } from "../../shared/util";
import { AmbulationMap, LevelOfCareMap } from "../util";

interface Props {
  resident: ResidentFragment;
  selected?: boolean;
  onClick: (id: string) => void;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  card: {
    padding: spacing(2),
    margin: spacing(1, 0),
  },
  cardSelected: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
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
      className={`${classes.card} ${
        selected ? classes.cardSelected : undefined
      }`}
      variant={selected ? "outlined" : "elevation"}
      onClick={onCardClick}
    >
      <Grid container justify="space-between" className={classes.headerRow}>
        <NameDisplay resident={resident} />
        <Chip label={resident.status} />
      </Grid>
      <Box className={classes.data}>
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
      </Box>
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
