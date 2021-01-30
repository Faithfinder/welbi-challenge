import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField as TextFieldBase,
} from "@material-ui/core";
import { DateTimePicker } from "formik-material-ui-pickers";
import { TextField, Switch } from "formik-material-ui";
import { Field, Form, Formik, FormikConfig, useField } from "formik";

import { FormProgram } from "./FormProgram.type";
import {
  useAddProgramMutation,
  namedOperations,
  LevelOfCare,
} from "../../generated/graphql.types";
import { StringArrayInput } from "./StringArrayInput";
import { Autocomplete } from "@material-ui/lab";

interface Props extends Omit<DialogProps, "onClose"> {
  onClose: () => void;
}

const useStyles = makeStyles(({ spacing }) => ({
  body: {
    display: "flex",
    flexFlow: "column nowrap",
    paddingTop: 0,
  },
  field: {
    marginBottom: spacing(1),
  },
}));

export const AddModal = ({ onClose, ...rest }: Props) => {
  const classes = useStyles();
  const [addProgram] = useAddProgramMutation({
    refetchQueries: [namedOperations.Query.ProgramsList],
  });

  const handleSubmit: FormikConfig<FormProgram>["onSubmit"] = (
    values,
    { setSubmitting }
  ) => {
    addProgram({
      variables: {
        input: values,
      },
    });
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} {...rest}>
      <Formik initialValues={FormProgram.empty()} onSubmit={handleSubmit}>
        <Form>
          <DialogTitle>Add program</DialogTitle>
          <DialogContent className={classes.body}>
            <Field
              component={TextField}
              name="name"
              label="Name"
              required
              className={classes.field}
            />
            <Field
              component={TextField}
              name="location"
              label="Location"
              required
              className={classes.field}
            />
            <Field
              component={TextField}
              name="dimension"
              label="Dimension"
              required
              className={classes.field}
            />
            <Grid container justify="space-between">
              <Field
                component={DateTimePicker}
                name="start"
                label="Start"
                className={classes.field}
              />
              <Field
                component={DateTimePicker}
                name="end"
                label="End"
                className={classes.field}
              />
              <FormControlLabel
                control={
                  <Field component={Switch} type="checkbox" name="allDay" />
                }
                label="All day"
              />
            </Grid>
            <StringArrayInput name="hobbies" label="Hobbies" />
            <StringArrayInput name="facilitators" label="Facilitators" />
            <StringArrayInput name="tags" label="Tags" />
            <LevelOfCareMultipleSelect />
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

const LevelOfCareMultipleSelect: React.FC = () => {
  const [, { value }, { setValue }] = useField<LevelOfCare[]>("levelOfCare");
  return (
    <Autocomplete
      multiple
      options={Object.keys(LevelOfCare).map(
        (key) => LevelOfCare[key as keyof typeof LevelOfCare]
      )}
      value={value}
      onChange={(_e, value) => setValue(value as LevelOfCare[])}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            size="small"
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextFieldBase {...params} name="levelOfCare" label={"Level of care"} />
      )}
    />
  );
};
