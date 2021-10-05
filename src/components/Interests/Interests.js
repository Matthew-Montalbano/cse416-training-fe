import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Interest from "./Interest/Interest";

const Interests = () => {
  const [interests, setInterests] = useState([]);
  const getInterests = () => {
    axios
      .get("https://cse416-training.herokuapp.com/interests")
      .then((res) => setInterests(res.data));
  };
  useEffect(() => getInterests(), []);
  console.log(`Interest count is ${interests.length}!`);

  return (
    <>
      <h2>INTERESTS</h2>
      <div>
        {interests.map((interest) => (
          <Grid key={interest._id} item>
            <Interest interest={interest} />
          </Grid>
        ))}
      </div>
    </>
  );
};

export default Interests;
