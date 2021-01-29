import { Chip, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { ResidentFragment } from "../../generated/graphql.types";
import { InfoField } from "../../shared/InfoField";
import { formatDate } from "../../shared/util";

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
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
      <section className={classes.data}>
        <InfoField label="Room" data={resident.room} />
        <InfoField label="Level of care" data={resident.levelOfCare} />
        <InfoField label="Ambulation" data={resident.ambulation} />
        <InfoField
          label="Birthday"
          data={formatDate(new Date(resident.birthDate))}
        />
        <InfoField
          label="Moved in"
          data={formatDate(new Date(resident.moveInDate))}
        />
      </section>
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
