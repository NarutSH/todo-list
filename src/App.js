import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Form from "./components/Form";
import TaskIcon from "@mui/icons-material/Task";
import PostContainer from "./components/PostContainer";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <Container>
      <Box
        sx={{
          height: "70vh",
          overflowY: "auto",
        }}
      >
        {posts.length ? (
          <PostContainer posts={posts} />
        ) : (
          <Box
            height="70vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
          >
            <Box textAlign="center">
              <TaskIcon
                sx={{
                  fontSize: "50px",
                }}
              />
              <Box>
                <Typography>กรุณาเพิ่มข้อมูล</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Form posts={posts} setPosts={setPosts} />
    </Container>
  );
};

export default App;
