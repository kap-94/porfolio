import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "5rem 0 15rem 0",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  title: {
    lineHeight: "5rem",
    marginBottom: "3rem",
    padding: "0 2rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "3.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
      padding: 0,
    },
  },
  body: {
    padding: "0 25%",

    [theme.breakpoints.down("sm")]: {
      padding: "0 14.5%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 7.5%",
    },
  },
}))
