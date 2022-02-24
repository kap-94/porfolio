import React, { useEffect, useRef, Fragment } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import GitHub from "@material-ui/icons/GitHub"

import { useStyles } from "./Project.styles.js"

gsap.registerPlugin(ScrollTrigger)

const Project = function ({
  info: { name },
  info: { description },
  info: { projectlink },
  info: { githublink },
  info: { techstack },
  info: { image },
  info: { imageright },
}) {
  const classes = useStyles()
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        toggleActions: "restart pause none pause",
      },
      x: 0,
      opacity: 1,
      duration: 0.75,
    })
  }, [])

  return (
    <Grid
      container
      className={`${classes.project} ${
        imageright ? classes.projectRight : classes.projectLeft
      }`}
      justifyContent="flex-end"
      alignItems="center"
      direction="row"
      ref={imageRef}
    >
      {imageright ? (
        <Fragment>
          <Grid
            sm={12}
            md={6}
            item
            className={`${classes.textContainer} ${classes.textContainerLeft}`}
          >
            <div className={classes.textLeft}>
              <Grid item container className={classes.githubLeft}>
                <a href={`${githublink}`} target="_blank" rel="noreferrer">
                  <GitHub className={classes.icon} />
                </a>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Github
                </Typography>
              </Grid>

              <Box sx={{ mb: "2rem" }}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  className={classes.headerLeft}
                >
                  <Typography className={classes.title} variant="h4">
                    {name}
                  </Typography>

                  <Grid item>
                    <a
                      href={`${projectlink}`}
                      className={classes.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project &rarr;
                    </a>
                  </Grid>
                </Grid>
              </Box>

              <Typography className={classes.description} variant="body2">
                {description}
              </Typography>

              <Box sx={{ pt: "2rem", pb: "1.5rem" }}>
                <Typography variant="body2" className={classes.techStack}>
                  {techstack}
                </Typography>
              </Box>
            </div>
          </Grid>

          <Grid sm={12} md={6} item>
            <a href={projectlink} target="_blank" rel="noreferrer">
              <div
                className={`${classes.imageContainer} ${classes.imageContainerRight}`}
              >
                <GatsbyImage
                  className={`${classes.image} ${classes.imageRight}`}
                  image={image.gatsbyImageData}
                  alt={name}
                />
              </div>
            </a>
          </Grid>
        </Fragment>
      ) : (
        <Fragment>
          <Grid sm={12} md={6} item>
            <a href={projectlink} target="_blank" rel="noreferrer">
              <div
                className={`${classes.imageContainer} ${classes.imageContainerLeft}`}
              >
                <GatsbyImage
                  image={image.gatsbyImageData}
                  className={`${classes.image} ${classes.imageLeft}`}
                  alt={name}
                />
              </div>
            </a>
          </Grid>

          <Grid
            sm={12}
            md={6}
            item
            className={`${classes.textContainer} ${classes.textContainerRight}`}
          >
            <div className={classes.textRight}>
              <Grid item container className={classes.githubRight}>
                <Typography className={classes.subtitle} variant="subtitle1">
                  Github
                </Typography>
                <a href={`${githublink}`} target="_blank" rel="noreferrer">
                  <GitHub className={classes.icon} />
                </a>
              </Grid>
              <Box sx={{ mb: "2rem" }}>
                <Grid
                  container
                  justifyContent="space-between"
                  className={classes.headerRight}
                  alignItems="center"
                >
                  <a
                    href={`${projectlink}`}
                    className={classes.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &larr; Project
                  </a>

                  <Typography className={classes.title} variant="h4">
                    {name}
                  </Typography>
                </Grid>
              </Box>
              <Typography className={classes.description} variant="body2">
                {description}
              </Typography>

              <Box sx={{ pt: "2rem", pb: "1.5rem" }}>
                <Typography variant="body2" className={classes.techStack}>
                  {techstack}
                </Typography>
              </Box>
            </div>
          </Grid>
        </Fragment>
      )}
    </Grid>
  )
}

export default Project
