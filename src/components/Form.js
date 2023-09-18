import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { v4 as uuidv4 } from "uuid";

const Form = ({ posts, setPosts }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [textInput, setTextInput] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const post = {
      id: uuidv4(),
      dateTime: dateTime,
      content: textInput,
    };

    setPosts([...posts, post]);

    setTextInput("");
    setDateTime(new Date());
  };

  const onReset = () => {
    setTextInput("");
    setDateTime(new Date());
  };

  return (
    <Box marginTop={3}>
      <Card>
        <form onSubmit={onHandleSubmit}>
          <CardContent>
            <Grid container>
              <Grid item xs={3}>
                <DateTimePicker
                  label="วันที่ - เวลา"
                  value={dateTime}
                  onChange={(date) => {
                    setDateTime(date);
                  }}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  value={textInput}
                  onChange={(event) => {
                    setTextInput(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={onReset}>
              Reset
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
};

export default Form;
