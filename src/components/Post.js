import { Card, CardContent, Grid, IconButton } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Post = ({ post }) => {
  //   const dateTime = new Date(post.dateTime);
  //   const date = dateTime.getDate();
  //   const month = dateTime.getMonth();
  //   const year = dateTime.getFullYear();

  //   const hour = dateTime.getHours();
  //   const minute = dateTime.getMinutes();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            {format(new Date(post.dateTime), "HH:mm")}
          </Grid>
          <Grid item xs={2}>
            {format(new Date(post.dateTime), "dd  MMMM  yyyy")}
          </Grid>
          <Grid item xs={8}>
            {post.content}
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
