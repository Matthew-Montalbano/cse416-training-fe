import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";

import useStyles from "./style.js";

const Form = () => {
  const classes = useStyles();
  const [interestData, setInterestData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    axios
      .post("https://cse416-training.herokuapp.com/interests/add", interestData)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        id="form"
        onSubmit={handleSubmit}
      >
        <h2 className={classes.heading}>Add an interest</h2>
        <TextField
          className={classes.TextField}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={interestData.title}
          onChange={(e) =>
            setInterestData({ ...interestData, title: e.target.value })
          }
        />
        <TextField
          className={classes.TextField}
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={interestData.description}
          onChange={(e) =>
            setInterestData({ ...interestData, description: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
