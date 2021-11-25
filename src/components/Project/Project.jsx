import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import GitHub from "@material-ui/icons/GitHub"
import LinkRounded from "@material-ui/icons/LinkRounded"

import { useStyles } from "./Project.styles.js"

const Project = ({
  info: { name },
  info: { description },
  info: { projectlink },
  info: { githublink },
  info: { techstack },
  info: { image },
  info: { imageright },
}) => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.mainContainer}
      justifyContent="flex-end"
      alignItems="center"
      direction="row"
    >
      {imageright ? (
        <React.Fragment>
          <Grid
            sm={12}
            md={6}
            item
            className={`${classes.textContainer} ${classes.textContainerLeft}`}
          >
            <Typography className={classes.subtitle} variant="subtitle1">
              Featured Project
            </Typography>

            <Box sx={{ mb: "2rem" }}>
              <Typography className={classes.title} variant="h5">
                {name}
              </Typography>
            </Box>
            <Typography className={classes.description} variant="body2">
              {description}
            </Typography>

            <Box sx={{ pt: "2rem", pb: "1.5rem" }}>
              <Typography className={classes.projectTechstack}>
                {techstack}
              </Typography>
            </Box>

            <Grid container className={classes.projectLinks}>
              <Box sx={{ mr: "1.5rem" }}>
                <a href={`${githublink}`} target="_blank" rel="noreferrer">
                  <GitHub classes={{ root: classes.icon }} />
                </a>
              </Box>

              <a href={`${projectlink}`} target="_blank" rel="noreferrer">
                <LinkRounded classes={{ root: classes.icon }} />
              </a>
            </Grid>
          </Grid>

          <Grid sm={12} md={6} item>
            <a href={projectlink} target="_blank" rel="noreferrer">
              <GatsbyImage
                className={`${classes.image} ${classes.imageRight}`}
                image={image.gatsbyImageData}
                alt={name}
              />
            </a>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid sm={12} md={6} item>
            <a href={projectlink} target="_blank" rel="noreferrer">
              <GatsbyImage
                image={image.gatsbyImageData}
                className={`${classes.image} ${classes.imageLeft}`}
                alt={name}
              />
            </a>
          </Grid>

          <Grid
            sm={12}
            md={6}
            item
            className={`${classes.textContainer} ${classes.textContainerRight}`}
          >
            <Typography
              className={classes.subtitle}
              variant="subtitle1"
              sx={{ m: 2 }}
            >
              Featured Project
            </Typography>

            <Box sx={{ mb: "2rem" }}>
              <Typography className={classes.title} variant="h5">
                {name}
              </Typography>
            </Box>
            <Typography className={classes.description} variant="body2">
              {description}
            </Typography>

            <Box sx={{ pt: "2rem", pb: "1.5rem" }}>
              <Typography className={classes.projectTechstack}>
                {techstack}
              </Typography>
            </Box>

            <Grid
              container
              justifyContent="flex-end"
              className={classes.projectLinks}
            >
              <Box sx={{ mr: "1.5rem" }}>
                <a href={`${githublink}`} target="_blank" rel="noreferrer">
                  <GitHub classes={{ root: classes.icon }} />
                </a>
              </Box>

              <a href={`${projectlink}`} target="_blank" rel="noreferrer">
                <LinkRounded classes={{ root: classes.icon }} />
              </a>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  )
}

export default Project
