import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import ContactSection from "../components/ContactSection/ContactSection"

import "../components/animations.css"

const useStyles = makeStyles(theme => ({
  landingPage: {
    backgroundColor: theme.palette.primary.main,
  },
  sectionContainer: {
    maxWidth: "1280px",
    margin: "auto",
  },
  heroContainer: {
    height: "100vh",
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.landingPage}>
      <Grid item id="section-hero" className={classes.heroContainer}>
        <HeroSection />
      </Grid>

      <Grid item id="section-about" className={classes.sectionContainer}>
        <AboutSection />
      </Grid>

      <Grid item id="section-projects" className={classes.sectionContainer}>
        <ProjectsSection />
      </Grid>

      <Grid item id="section-contact" className={classes.sectionContainer}>
        <ContactSection />
      </Grid>
    </Grid>
  )
}

export default LandingPage
