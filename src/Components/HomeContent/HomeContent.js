import { Container, Grid, Grow } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Form, Posts } from "..";
import { getPosts } from "../../Actions/postsAction";
export default function HomeContent() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Grow in>
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginTop: "4%" }}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}
