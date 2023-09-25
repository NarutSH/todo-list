import {
  Box,
  Card,
  CardContent,
  Container,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import TaskIcon from "@mui/icons-material/Task";
import PostContainer from "../components/PostContainer";
import axios from "axios";

const Todo = () => {
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const getData = async () => {
    const skip = (page - 1) * limit;

    const url = `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`;

    // const response = await fetch(url);
    // const responseJon = await response.json();
    // console.log(responseJon);

    const response = await axios.get(url);

    setTotalPost(response.data.total);
    setPosts(response.data.todos);
  };

  useEffect(() => {
    getData();
  }, [page]);

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
      <Box marginTop="10px">
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="end" alignItems="center">
              <Pagination
                count={Math.ceil(totalPost / limit)}
                onChange={(_, newPage) => {
                  setPage(newPage);
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Form posts={posts} setPosts={setPosts} />
    </Container>
  );
};

export default Todo;
