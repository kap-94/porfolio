import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"

import { useStyles } from "./AboutSection.styles"

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const classes = useStyles()

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    })

    tl.to(".image-container", {
      scrollTrigger: {
        trigger: ".image-container",
      },
      stagger: 1,
      y: 0,
      opacity: 1,
    })
  }, [])

  return (
    <Grid container className={classes.fullContainer}>
      <Grid
        item
        container
        className={classes.mainContainer}
        direction="row"
        alignItems="center"
      >
        <Typography className={classes.watermark}>WEB</Typography>

        <Grid md={6} item className={classes.textContainer}>
          <Box sx={{ mb: "2rem" }}>
            <Typography className={classes.title} variant="h2" color="initial">
              <span className={classes.highlightedText}> About </span>Me
            </Typography>
          </Box>

          <Box sx={{ mb: "3rem" }}>
            <Box sx={{ mb: "4.5rem" }}>
              <Typography variant="body2">
                My name is Pablo Karam, I studied business administration in the
                National Autonomus University of Mexico
                <span className={classes.highlightedText}> UNAM</span>,
                throughout my studies i develop a strong interest in how
                organizations could use technological resources to make their
                business processes more{" "}
                <span className={classes.highlightedText}> efficient</span> and
                leverage
                <span className={classes.highlightedText}>
                  {" "}
                  new business oportunities
                </span>
                , so in 2019 i start to get into the tech world with a special
                focus on{" "}
                <span className={classes.highlightedText}>
                  {" "}
                  web development
                </span>
                , but i also have worked in projects related to the business
                area like{" "}
                <span className={classes.highlightedText}>
                  {" "}
                  data analytics
                </span>{" "}
                ,<span className={classes.highlightedText}>
                  {" "}
                  web scrapping
                </span>{" "}
                ,
                <span className={classes.highlightedText}>
                  {" "}
                  algorithmic trading{" "}
                </span>
                and ocaccionaly{" "}
                <span className={classes.highlightedText}> UI/UX.</span>
              </Typography>
            </Box>

            {/* <Box sx={{ mb: "3rem" }}>
              <Typography variant="body2">
                This year i was able to participate in the PAPPIT program, an
                investigation from the CONACYT in the voice of the peopled who
                was previously diagnosed with Covid-19, using text-to-speech and
                text mining techniques we aim to discover pattrons that aloww to
                contribute to the realization of public policies.
              </Typography>
            </Box> */}

            <Box sx={{ mb: "1.5rem" }}>
              <Box sx={{ mb: ".5rem" }}>
                <Typography variant="h5">Programming Lenguages</Typography>
              </Box>

              <Typography variant="body2">
                HTML, CSS/SASS, JavaScript (ES6+), Node JS, Python, PHP,
                MongoDB, SQL.
              </Typography>
            </Box>

            <Box sx={{ mb: "1.5rem" }}>
              <Box sx={{ mb: ".5rem" }}>
                <Typography variant="h5">Frameworks and Libraries</Typography>
              </Box>

              <Typography variant="body2">
                React, Gatsby, Material UI, Styled Components, Bootstrap,
                Express, Mongoose, Django, Scrapy, Scikit Learn, Pandas.
              </Typography>
            </Box>

            <Box sx={{ mb: ".5rem" }}>
              <Typography variant="h5">Tools and Platforms</Typography>
            </Box>

            <Typography variant="body2">
              Git, Github, Netlify, Heroku, Figma.
            </Typography>
          </Box>
        </Grid>

        <Grid md={6} item container>
          <Grid container className={classes.compositionContainer}>
            <StaticImage
              className={`${classes.imagePrimary} ${classes.image} image-container`}
              src="../../images/about-2.jpeg"
              alt="Portfolio Image"
              quality={95}
              formats={["auto", "webp", "avif"]}
            />

            <StaticImage
              className={`${classes.imageSecondary} ${classes.image} image-container`}
              src="../../images/about-3.jpeg"
              alt="Portfolio Image"
              quality={95}
              formats={["auto", "webp", "avif"]}
            />

            <div className={classes.box}></div>

            <div className={classes.circle}></div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutSection
