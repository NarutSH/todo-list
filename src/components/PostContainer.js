import { Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

const PostContainer = ({ posts }) => {
  // const todoLists = [
  //   {
  //     id: 1,
  //     dateTime: new Date().toISOString(),
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
  //   },
  //   {
  //     id: 2,
  //     dateTime: new Date(12, 1, 1, 1, 1).toISOString(),
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
  //   },
  // ];

  return (
    <Stack spacing={2}>
      {posts.map((todo) => {
        return <Post post={todo} key={todo.id} />;
      })}
    </Stack>
  );
};

export default PostContainer;
