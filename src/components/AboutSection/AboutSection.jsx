import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"

import { AnchorButton } from "../CustomButton/CustomButton"

import { useStyles } from "./AboutSection.styles"

const AboutSection = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.mainContainer}
      direction="row"
      alignItems="center"
    >
      <Grid xs={12} sm={7} lg={6} item className={classes.textContainer}>
        <Box sx={{ mb: "2rem" }}>
          <Typography
            className={classes.textTitle}
            variant="h4"
            color="initial"
          >
            01. About Me
          </Typography>
        </Box>

        <Box sx={{ mb: "3rem" }}>
          <Typography
            variant="body1"
            color="initial"
            style={{ marginBottom: "3rem" }}
          >
            My name is Pablo Karam, I studied business administration in the
            Faculty of Accounting and Aministration of the UNAM, throughout my
            studies i develop a strong interest in how organizations could use
            technological resources to make their business processes more
            efficient and leverage new business oportunities, so in 2019 i start
            to get into the tech world with a special focus on web development.
          </Typography>

          <Typography variant="body2" style={{ marginBottom: "1rem" }}>
            Technologies that i'been using:
          </Typography>
          <Typography variant="body2">
            HTML, CSS/SASS, JavaScript (ES6+), React, Gatsby, Material UI, PHP,
            SQL, Python, Django, Scrapy, Pandas.
          </Typography>
        </Box>

        <Box className={classes.textButton}>
          <AnchorButton href="mailto:karamjpwork@gmail.com">
            Send me a message
          </AnchorButton>
        </Box>
      </Grid>

      <Grid xs={12} sm={5} lg={6} item>
        <Grid container className={classes.compositionContainer}>
          <StaticImage
            src="../../images/about-2.jpeg"
            alt=""
            className={`${classes.image} ${classes.imagePrimary}`}
            quality={95}
            formats={["auto", "webp", "avif"]}
          />

          <Hidden mdDown>
            <StaticImage
              src="../../images/about-3.jpeg"
              alt=""
              className={`${classes.image} ${classes.imageSecondary}`}
              quality={95}
              formats={["auto", "webp", "avif"]}
            />
          </Hidden>

          <Hidden mdDown>
            <div className={classes.box}></div>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutSection
