import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
export default function Posts() {
  const postsData = useSelector((state) => state.Posts);
  console.log(postsData);
  // const [posts, setPosts] = React.useState(postsData);
  // console.log(posts);
  const classes = useStyles();
  return (
    <Grid className={classes.mainContainer} container spacing={1}>
      {/* {postsData.data.map((post) => (
        <Post post={post} />
      ))} */}
    </Grid>
  );
}
