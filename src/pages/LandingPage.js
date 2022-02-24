import React, { useEffect } from "react"

import gsap from "gsap"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import ContactSection from "../components/ContactSection/ContactSection"

const useStyles = makeStyles(theme => ({
  landingPage: {
    backgroundColor: "#FFF",
  },
}))

const LandingPage = function () {
  const classes = useStyles()

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.8 },
    })

    tl.to(".tab", { y: 0, opacity: 1, stagger: 0.125 })
      .to(".brand", { opacity: 1 }, "-=1")
      .to(
        ".hero-text",
        {
          y: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          stagger: 0.2,
        },
        "-=.25"
      )
      .to(".hero-button", { y: 0, opacity: 1 }, "-=.5")
  }, [])

  return (
    <Grid container direction="column" className={classes.landingPage}>
      <Grid item id="section-hero">
        <HeroSection />
      </Grid>

      <Grid item id="section-about" className={classes.aboutSection}>
        <AboutSection />
      </Grid>

      <Grid item id="section-projects" className={classes.projectsSection}>
        <ProjectsSection />
      </Grid>

      <Grid item id="section-contact" className={classes.contactSection}>
        <ContactSection />
      </Grid>
    </Grid>
  )
}

export default LandingPage
