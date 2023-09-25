import { Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

const PostContainer = ({ posts }) => {
  return (
    <Stack spacing={2}>
      {posts.map((todo, index) => {
        return <Post post={todo} key={todo.id} postIndex={index} />;
      })}
    </Stack>
  );
};

export default PostContainer;
