import { makeStyles } from "@material-ui/core/styles"
import "../animations.css"

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#152F40",
    backgroundSize: "cover",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23152F40'/%3E%3Cstop offset='1' stop-color='%23152F40'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23D95032' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23D95032' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.19'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
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
    marginBottom: "2.5rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "6.35rem",
      marginBottom: "2rem",
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
    marginBottom: "4rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "6rem",
      marginBottom: "3.5rem",
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
