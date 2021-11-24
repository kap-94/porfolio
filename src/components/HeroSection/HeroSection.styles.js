import { makeStyles } from "@material-ui/core/styles"
import "../animations.css"

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  textContainer: {
    position: "relative",
    padding: "5rem 12.5rem",
    animationName: "clipPathDown",
    animationDuration: "3s",
    animationTimingFunction: "ease",

    [theme.breakpoints.down("md")]: {
      padding: "5rem 0 5rem 8rem",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "5rem 7rem",
    },

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "1.5rem 2rem",
    },
  },
  title: {
    marginBottom: "3.5rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "6.35rem",
      marginBottom: "3rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
      lineHeight: "7rem",
      marginBottom: "1.25rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
      marginBottom: "0",
    },
  },
  subtitle: {
    lineHeight: "4rem",
    marginBottom: "5rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "6rem",
      marginBottom: "4.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "3rem",
      lineHeight: "5.5rem",
      fontSize: "4rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "3.5rem",
    },
  },
  body: {
    fontSize: "1.8rem",
    paddingRight: "40%",
    lineHeight: "unset",

    [theme.breakpoints.down("md")]: {
      paddingRight: "25%",
    },

    [theme.breakpoints.down("sm")]: {
      paddingRight: "10%",
    },

    [theme.breakpoints.down("xs")]: {
      paddingRight: "0",
    },
  },
  asideParagraph: {
    color: "#CCD6F5",
    letterSpacing: "2px",
    lineHeight: 2,
    mixBlendMode: "difference",
    transform: "rotate(-90deg)",
    position: "absolute",
    top: "48.5%",
    left: "-3.5rem",

    "&::before": {
      content: "''",
      backgroundColor: "#CCD6F5",
      transform: "rotate(-90deg)",
      width: "1px",
      height: "115px",
      position: "fixed",
      bottom: "-44px",
      right: "-78.5px",
    },

    "&::after": {
      content: "''",
      backgroundColor: "#CCD6F5",
      transform: "rotate(-90deg)",
      width: "1px",
      height: "115px",
      position: "fixed",
      bottom: "-44px",
      left: "-78.5px",
    },
  },
}))
