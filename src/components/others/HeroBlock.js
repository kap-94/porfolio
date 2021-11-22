import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  heroTextContainer: {
    minWidth: "21.5rem",
    // marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  buttonContainer: {
    marginTop: "1rem",
  },

  estimateButton: {
    // ...theme.typography.estimate,
    // backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },

  learnButtonHero: {
    // ...theme.typography.learnButton,
    height: 45,
    width: 145,
  },
}))

const HeroBlock = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justifyContent="flex-end"
      alignItems="center"
      direction="row"
    >
      <Grid sm item className={classes.heroTextContainer}>
        <Typography variant="h2" align="center">
          Bringing West Coast Technology
          <br />
          to the Midwest
        </Typography>

        <Grid
          container
          justifyContent="center"
          className={classes.buttonContainer}
        >
          <Grid item>
            <Button className={classes.estimateButton}>Concact Me</Button>
          </Grid>

          <Grid item>
            <Button className={classes.learnButtonHero}>Projects</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid sm container justifyContent="center" className={classes.animation}>
        <div>Hello World!</div>
      </Grid>
    </Grid>
  )
}

export default HeroBlock
