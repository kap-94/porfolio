import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(theme => ({
  fullContainer: {
    padding: "8vw 0",
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
  mainContainer: {
    margin: "auto",
    maxWidth: "1280px",

    [theme.breakpoints.down("lg")]: {
      padding: "0 5vw",
    },
  },
  textContainer: {
    paddingRight: "2.5rem",
    zIndex: 10,

    [theme.breakpoints.down("md")]: {
      textAlign: "justify",
      paddingRight: "unset",
      marginBottom: "3rem",
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: "5rem",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "7rem",
      textAlign: "center",
    },
  },
  watermark: {
    fontSize: "42.5rem",
    opacity: ".45",
    position: "absolute",
    top: 0,
  },
  highlightedText: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
  compositionContainer: {
    position: "relative",
    width: "100%",
    height: "55rem",
    // boxShadow: `0 24px 125px 0 ${theme.palette.primary.main}`,
    // boxShadow: `3.5px 3.5px 7.5px 0 ${theme.palette.primary.main}`,

    [theme.breakpoints.down("sm")]: {
      height: "35rem",
    },
  },
  image: {
    position: "absolute",
    height: "40rem",
    opacity: 0,
    width: "32.5rem",
    zIndex: 20,

    transition: "all .5s cubic-bezier(.77, 0, .175, 1)",

    "&:hover": {
      transform: "translateY(.5rem)",
      zIndex: 30,
    },
  },
  imagePrimary: {
    boxShadow: `-10px 10px 0 0 ${theme.palette.secondary.main}`,
    right: 30,
    top: 0,

    [theme.breakpoints.down("sm")]: {
      height: "35rem",
      width: "100%",
    },
  },
  imageSecondary: {
    boxShadow: `10px 10px 0 0 ${theme.palette.primary.main}`,
    bottom: -100,
    left: 35,
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    height: "32.5rem",
    width: "65rem",
    position: "absolute",
    top: 165,
    right: -180,
    zIndex: 10,
  },
  circle: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "50%",
    height: "38rem",
    width: "38rem",
    position: "absolute",
    bottom: "20%",
    right: "-10rem",
    zIndex: 1,
  },
}))
