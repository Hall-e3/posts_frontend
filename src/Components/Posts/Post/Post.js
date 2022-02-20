import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
export default function Post() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} />
          <CardContent className={classes.detail}>
            <Typography className={classes.title}></Typography>
          </CardContent>
          <CardActions className={classes.cardActions}></CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
