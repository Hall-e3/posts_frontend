import { Grid, TextField } from "@mui/material";

export default function CustomInput({
  name,
  value,
  onChange,
  variant,
  placeholder,
  label,
  ...others
}) {
  return (
    <Grid item xs={12}>
      <TextField
        variant={variant || "outlined"}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        label={label}
        fullWidth
        autoComplete="on"
        autoFocus
        {...others}
      />
    </Grid>
  );
}
