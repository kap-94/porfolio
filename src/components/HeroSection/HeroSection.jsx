import React from "react"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"

import { DownloadButton } from "../CustomButton/CustomButton"
import resumePDF from "../../images/resume.pdf"

import { useStyles } from "./HeroSection.styles.js"

const HeroSection = () => {
  const classes = useStyles()

  return (
    <Grid container classes={{ root: classes.mainContainer }}>
      <Grid item>
        <div className={classes.textContainer}>
          <Hidden mdDown>
            <div className={classes.asideParagraph}>
              <span>Web Development</span>
            </div>
          </Hidden>
          <Box sx={{ ml: ".5rem", mb: "1rem" }}>
            <Typography variant="subtitle1" style={{ opacity: 0.875 }}>
              Hello World!
            </Typography>
          </Box>
          <Typography className={classes.title} variant="h1">
            Pablo Karam
          </Typography>
          <Typography className={classes.subtitle} variant="h2">
            Creating business solutions
          </Typography>

          <Typography className={classes.body} variant="body1" color="initial">
            I am a business graduate and software development enthusiast who is
            confident in the potential of technology to transform and develop
            any business.
          </Typography>

          <Box sx={{ mt: "5rem" }}>
            <DownloadButton href={resumePDF} downloadTitle="resume.pdf">
              Resume
            </DownloadButton>
          </Box>
        </div>
      </Grid>
    </Grid>
  )
}

export default HeroSection
