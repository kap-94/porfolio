import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"

import Project from "../Project/Project"
import useProjects from "../../hooks/useProjects"

const useStyles = makeStyles(theme => ({
  fullContainer: {
    backgroundColor: theme.palette.common.white,
    clipPath: "polygon(0 20vh, 100% 0, 100% 100%, 0 100%)",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      clipPath: "unset",
    },
  },
  mainContainer: {
    // Cool effect!
    // clipPath: "polygon(0 0, 100% 0, 100% 20vh, 0 100%)",
    padding: "15vw 0 3.5vw",
    position: "relative",
    maxWidth: "1280px",
    margin: "auto",

    [theme.breakpoints.down("lg")]: {
      padding: "25vw 5vw 3.5vw",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "18.5vw 5vw 10vw",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "23.5vw 5vw 15vw",
    },
  },
  watermark: {
    fontSize: "42.5rem",
    opacity: ".5",
    position: "absolute",
    color: "white",
    top: "8vw",
    left: "10rem",

    [theme.breakpoints.down("lg")]: {
      top: "16vw",
    },

    [theme.breakpoints.down("sm")]: {
      top: "0",
      zIndex: -1,
    },
  },
  highlightedText: {
    color: theme.palette.secondary.main,
  },
  title: {
    marginBottom: "3rem",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginBottom: "5.5rem",
      width: "100%",
    },
  },
}))

const ProjectsSection = () => {
  const classes = useStyles()
  const projects = useProjects()

  return (
    <Grid container className={classes.fullContainer}>
      <Grid item container className={classes.mainContainer}>
        <Typography className={classes.watermark}>WORK</Typography>

        <Typography variant="h2" color="initial" className={classes.title}>
          Things i've <span className={classes.highlightedText}> work</span> on
        </Typography>

        {projects.map(project => (
          <Grid item key={project.id}>
            <Project info={project} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ProjectsSection
