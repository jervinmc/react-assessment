import React from "react";
import { Grid } from "@mui/material";
import { style } from "@mui/system";

const styles = {
  boxContainer: {
    background: "",
    height: "30vh",
    // display: "flex",
    padding: "50px",
    width: "100vw",
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
  title: {
    fontSize: "30px",
    color: "black",
    alignItems: "center",
  },
  content: {
    padding:'20px 0px 20px 0px',
    fontSize: "20px",
    alignItems: "center",
  },
  contentBox: {
    padding: "30px 0px 0px 0px",
  },
};

function About() {
  return (
    <div style={styles.boxContainer}>
      <Grid style={styles.title}>
        <div align="center" style={styles.title}>
          About Us
        </div>
      </Grid>
      <Grid container>
        <Grid lg={6} style={styles.contentBox}>
          <div style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Grid>
        <Grid lg={5} style={styles.contentBox}>
          <div style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
