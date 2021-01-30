import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { TextField } from "formik-material-ui";
import { Field, Form, Formik, FormikConfig, useField } from "formik";

import { FormResident } from "./FormResident.type";
import {
  Ambulation,
  LevelOfCare,
  useAddResidentMutation,
  namedOperations,
} from "../../generated/graphql.types";

interface Props extends Omit<DialogProps, "onClose"> {
  onClose: () => void;
}

const useStyles = makeStyles(({ spacing }) => ({
  body: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: spacing(0, 2),
    paddingTop: 0,
  },
  field: {
    marginBottom: spacing(1),
  },
}));

export const AddModal = ({ onClose, ...rest }: Props) => {
  const classes = useStyles();
  const [addResident] = useAddResidentMutation({
    refetchQueries: [namedOperations.Query.ResidentsList],
  });

  const handleSubmit: FormikConfig<FormResident>["onSubmit"] = (
    values,
    { setSubmitting }
  ) => {
    values.name = `${values.firstName} ${values.lastName}`;
    addResident({
      variables: {
        input: values,
      },
    });
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog onClose={onClose} {...rest}>
      <Formik initialValues={FormResident.empty()} onSubmit={handleSubmit}>
        <Form>
          <DialogTitle>Add resident</DialogTitle>
          <DialogContent className={classes.body}>
            <Field
              component={TextField}
              name="firstName"
              label="First name"
              required
              className={classes.field}
            />
            <Field
              component={TextField}
              name="lastName"
              label="Last name"
              required
              className={classes.field}
            />
            <Field
              component={TextField}
              name="preferredName"
              label="Preferred name"
              className={classes.field}
            />
            <Field
              component={TextField}
              name="status"
              label="Status"
              className={classes.field}
            />
            <Field
              component={TextField}
              name="room"
              label="Room"
              required
              className={classes.field}
            />
            <Field
              component={DatePicker}
              name="birthDate"
              label="Birthday"
              className={classes.field}
            />
            <Field
              component={DatePicker}
              name="moveInDate"
              label="Moved in"
              className={classes.field}
            />
            <LevelOfCareSelect />
            <AmbulationSelect />
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};

const LevelOfCareSelect: React.FC = () => {
  const [fieldProps] = useField<LevelOfCare>("levelOfCare");
  return (
    <FormControl required>
      <InputLabel>Level of care</InputLabel>
      <Select {...fieldProps}>
        {Object.keys(LevelOfCare).map((key) => {
          const levelOfCare = LevelOfCare[key as keyof typeof LevelOfCare];
          return (
            <MenuItem key={levelOfCare} value={levelOfCare}>
              {levelOfCare}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

const AmbulationSelect: React.FC<{}> = () => {
  const [fieldProps] = useField<Ambulation>("ambulation");
  return (
    <FormControl required>
      <InputLabel>Ambulation</InputLabel>
      <Select {...fieldProps}>
        {Object.keys(Ambulation).map((key) => {
          const ambulation = Ambulation[key as keyof typeof Ambulation];
          return (
            <MenuItem key={ambulation} value={ambulation}>
              {ambulation}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
