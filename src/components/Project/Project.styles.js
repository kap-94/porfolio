import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "7rem 10rem 7rem 2rem",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      padding: "7rem 1rem",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0",
      padding: 0,
    },
  },
  image: {
    objectFit: "contain",
    height: "35rem",
    width: "100%",
    opacity: 0.9,
    transition: "0.2s all ease-in",

    "&:hover": {
      transform: "scale(1.025)",
    },

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      opacity: ".15",
    },
  },
  imageLeft: {
    marginLeft: "5rem",
    // transform: "translateX(5rem)",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "unset",
      transform: "unset",
    },
  },
  textContainer: {
    zIndex: 1,

    [theme.breakpoints.down("md")]: {
      padding: "5rem 1rem",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "3rem 5rem",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "2.5rem",
    },
  },
  textContainerLeft: {
    transform: "translateX(5rem)",

    [theme.breakpoints.down("sm")]: {
      transform: "unset",
    },
  },
  textContainerRight: {
    textAlign: "right",

    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3rem",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "unset",
      textAlign: "center",
    },
  },
  subtitle: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3rem",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "unset",
      textAlign: "center",
    },
  },
  description: {
    backgroundColor: "#395D73",
    fontSize: "1.65rem",
    padding: "3rem",
    textAlign: "justify",
    width: "110%",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      width: "100%",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      lineHeight: "1.85",
      padding: "1.5rem",
    },
  },
  projectTechstack: {
    fontSize: "1.65rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.55rem",
      fontWeight: 500,
      paddingLeft: "3rem",
      color: "#fff",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      paddingLeft: "unset",
      textAlign: "center",
    },
  },
  projectLinks: {
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      paddingLeft: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      paddingLeft: "unset",
    },
  },
  icon: {
    fill: "#fff",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.25rem",
    },
  },
}))
