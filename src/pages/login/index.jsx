import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

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
  paddingBottom: {
    // fontSize:'30px',
    // color: "white",
    paddingBottom: "0px 0px 30px 0px",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    try {
      axios
        .post("http://localhost:8000/api/v1/auth/login/", {
          email: email,
          password: password,
        })
        .then((res) => {
          alert("Successfully Logged In!");
          window.location = "/admin/dashboard";
        });
    } catch (error) {
      alert("Wrong Credentials!");
    }
  };

  const setEmailHandler = (val) => {
    setEmail(val.target.value);
  };
  const setPasswordHandler = (val) => {
    setPassword(val.target.value);
  };

  return (
    <div style={styles.boxContainer}>
      <Grid container>
        <Grid lg={6} container>
          <Grid style={styles.textWhite}>Login to your account</Grid>
          <Grid style={styles.subText}>
            We are team of talented designers making websites with Bootstrap
          </Grid>
        </Grid>
        <Grid lg={6}>
          <Grid style={styles.paddingBottom}>
            <div style={styles.subText}>Email</div>
            <TextField onChange={setEmailHandler} variant="outlined" />
          </Grid>
          <Grid style={styles.paddingBottom}>
            <div style={styles.subText}>Password</div>
            <TextField onChange={setPasswordHandler} variant="outlined" />
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              onClick={submitHandler}
              style={styles.buttonStyle}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
