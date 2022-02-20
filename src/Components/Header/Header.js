import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4" align="center">
              Lifying
            </Typography>
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
