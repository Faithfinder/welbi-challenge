import { Chip, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
}

export const StringArrayInput: React.FC<Props> = ({ name, label }) => {
  const [, { value }, { setValue }] = useField<string[]>(name);
  return (
    <Autocomplete
      multiple
      freeSolo
      options={[]}
      value={value}
      onChange={(_e, value) => setValue(value as string[])}
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
        <TextField
          {...params}
          name={name}
          label={label}
          onBlur={(e) => {
            if (e.target.value) {
              setValue([...value, e.target.value]);
            }
          }}
        />
      )}
    />
  );
};
