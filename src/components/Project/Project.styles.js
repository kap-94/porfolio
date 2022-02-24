import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(theme => ({
  project: {
    margin: "10rem 0",
    position: "relative",

    "&:hover": {
      transform: "scale(1.5)",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "5rem auto",
      opacity: 1,
      width: "90%",
    },
  },
  projectLeft: {
    transform: "translateX(400px)",
  },
  projectRight: {
    transform: "translateX(-400px)",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    boxShadow: "0 24px 115px 0 #777",
    overflow: "hidden",
    height: "45rem",
    width: "125%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageContainerRight: {
    transform: "translateX(-25%)",

    [theme.breakpoints.down("sm")]: {
      transform: "unset",
    },
  },
  image: {
    objectFit: "contain",
    opacity: 0.945,
    height: "100%",
    width: "100%",

    transition: "transform 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95)",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  imageLeft: {},
  imageRight: {},
  textContainer: {
    backgroundColor: "#ffffff",
    boxShadow: `-4px 0px 0 0 ${theme.palette.primary.main}`,
    borderRadius: "3px",
    padding: "4.5rem 7.5rem",
    zIndex: 1,
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      boxShadow: "unset",
      padding: "2.5rem",
      text: "justify",
    },
  },
  textContainerLeft: {
    transform: "skewX(-12deg)",

    [theme.breakpoints.down("sm")]: {
      transform: "unset",
    },
  },
  textContainerRight: {
    transform: "skewX(12deg)",
    textAlign: "right",

    [theme.breakpoints.down("sm")]: {
      transform: "unset",
      textAlign: "left",
    },
  },
  textLeft: {
    transform: "skewX(12deg)",

    [theme.breakpoints.down("sm")]: {
      transform: "unset",
    },
  },
  textRight: {
    transform: "skewX(-12deg)",

    [theme.breakpoints.down("sm")]: {
      transform: "unset",
    },
  },
  headerLeft: {},
  headerRight: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
    },
  },
  githubLeft: {
    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem 0 2rem",
    },
  },
  githubRight: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
      justifyContent: "start",
      margin: "1.5rem 0 2rem",
    },
  },
  title: {
    display: "inline-block",
    position: "relative",
    marginBottom: "1.25rem",
    fontWeight: 600,

    "&::after": {
      content: '""',
      height: "4px",
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
      position: "absolute",
      bottom: "-1rem",
      left: 0,
    },

    // [theme.breakpoints.down("sm")]: {
    //   paddingLeft: "3rem",
    // },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "unset",
      textAlign: "center",
    },
  },
  projectLink: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: "1.5rem",
    marginLeft: "1rem",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  subtitle: {
    margin: "0 1rem",
  },
  description: {
    fontSize: "1.65rem",
    lineHeight: 1.5,
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      lineHeight: "1.85",
    },
  },
  techStack: {
    fontSize: "1.65rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  icon: {
    fill: theme.palette.secondary.main,
    fontSize: "2.5rem",
  },
}))
