import { Autocomplete, Checkbox, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface CheckboxSelectProps {
  options: Array<string>;
  label: string;
  width?: number;
  paddingBottom?: number;
}

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function CheckboxSelect(props: CheckboxSelectProps) {
  return (
    <Autocomplete
      sx={{
        maxWidth: props.width || 750,
        paddingBottom: props.paddingBottom || 0,
      }}
      fullWidth
      multiple
      options={props.options}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
