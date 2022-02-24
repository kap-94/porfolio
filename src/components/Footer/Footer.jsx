import React from "react"

import { makeStyles } from "@material-ui/core"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "2rem 0",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Grid container justifyContent="center" className={classes.footer}>
      <Grid item>
        <footer className={classes.footer}>
          <Typography variant="body1" align="center">
            Design &amp; Built by Pablo Karam
          </Typography>
        </footer>
      </Grid>
    </Grid>
  )
}

export default Footer
