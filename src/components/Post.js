import { Card, CardContent, Checkbox, Grid, IconButton } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Post = ({ post, postIndex }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            {/* {postIndex + 1} */}
            {post.id}
          </Grid>
          <Grid item xs={2}>
            <Checkbox checked={post.completed} />
          </Grid>
          <Grid item xs={8}>
            {post.todo}
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Post;
