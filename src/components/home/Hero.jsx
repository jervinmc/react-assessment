import { Button, Grid } from "@mui/material";
import React from "react";
import logo from "./logo.svg";

const styles = {
  boxContainer: {
    background: "#40547c",
    height: "80vh",
    display: "flex",
    padding: "50px",
    width: "100wh",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: "40px",
  },
  center: {},
  textWhite: {
    fontSize: "40px",
    color: "white",
  },
  subText: {
    fontSize: "30px",
    color: "white",
  },
  buttonStyle: {
    // fontSize:'30px',
    color: "white",
  },
};

function Hero() {
  const signIn = () => {
    // alert()
    window.location = "/login";
  };
  const register = () => {
    // alert()
    window.location = "/register";
  };

  return (
    <div style={styles.boxContainer}>
      <Grid container>
        <Grid lg={6} container>
          <Grid style={styles.textWhite}>
            Better Solutions For Your Business
          </Grid>
          <Grid style={styles.subText}>
            We are team of talented designers making websites with Bootstrap
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              onClick={signIn}
              style={styles.buttonStyle}
            >
              Sign In
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              onClick={register}
              style={styles.buttonStyle}
            >
              Register
            </Button>
          </Grid>
        </Grid>

        <Grid lg={6}>
          <Grid lg={6}>
            <img height={200} width={500} alt="sdfds" src={logo} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
