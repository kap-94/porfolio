import React from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"

import { AnchorButton } from "../CustomButton/CustomButton"

import { useStyles } from "./ContactSection.styles.js"

const ContactSection = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.mainContainer}
      justifyContent="flex-end"
      alignItems="center"
      direction="column"
    >
      <Grid sm item>
        <Box className={classes.textContainer} sx={{ mb: "2rem" }}>
          <Typography className={classes.title} variant="h3" align="center">
            Let's Create Together
          </Typography>

          <Typography className={classes.body} variant="body1" align="center">
            I am currently looking for new opportunities, my inbox is always
            open. If you have any questions, please send a message.
          </Typography>
        </Box>
      </Grid>

      <Grid sm item>
        <AnchorButton href="mailto:karampdwork@gmail.com">Say Hi!</AnchorButton>
      </Grid>
    </Grid>
  )
}

export default ContactSection
