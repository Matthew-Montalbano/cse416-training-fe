import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import Interests from "./components/Interests/Interests";
import Form from "./components/Form/Form";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <Grow in>
        <Container>
          <Grid container alignItems="center" spacing="1" direction="column">
            <div>
              <h1>Matthew Montalbano</h1>
            </div>
            <Grid item xs={12} sm={7}>
              <Interests />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <AmplifySignOut />
    </Container>
  );
};

export default withAuthenticator(App);
