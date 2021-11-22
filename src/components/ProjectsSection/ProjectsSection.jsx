import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Box } from "@material-ui/core"

import Project from "../Project/Project"
import useProjects from "../../hooks/useProjects"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "15rem 0",

    [theme.breakpoints.down("lg")]: {
      padding: "15rem 5rem",
    },

    [theme.breakpoints.down("md")]: {
      padding: "7.5rem 5rem",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "7.5rem 1rem",
    },
  },
  projectContainer: {
    width: "100%",
  },
  sectionTitle: {
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
    <Grid container className={classes.mainContainer}>
      <Box classes={{ root: classes.sectionTitle }} sx={{ mb: "3rem" }}>
        <Typography variant="h4" color="initial">
          02. Things i've work on
        </Typography>
      </Box>

      {projects.map(project => (
        <Grid
          item
          key={project.id}
          classes={{ root: classes.projectContainer }}
        >
          <Project info={project} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectsSection
