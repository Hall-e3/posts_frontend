import { Button, Grid } from "@mui/material";

export default function CustomButton({
  text,
  variant,
  onClick,
  size,
  color,
  ...others
}) {
  return (
    <Grid item xs={12}>
      <Button
        variant={variant || "contained"}
        onClick={onClick}
        size={size || "large"}
        {...others}
        fullWidth
        color={color || "primary"}
      >
        {text}
      </Button>
    </Grid>
  );
}
