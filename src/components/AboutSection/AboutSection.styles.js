import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: "15rem 1rem",

    [theme.breakpoints.down("lg")]: {
      padding: "15rem 10rem",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10rem 3rem",
    },
  },
  textContainer: {
    lineHeight: 1.7,
    paddingRight: "5rem",

    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      textJustify: "inter-word",
      paddingRight: "2.5rem",
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: "5rem",
      paddingRight: "0",
    },
  },
  textTitle: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "7rem",
      textAlign: "center",
    },
  },
  textButton: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2rem",
    },
  },
  compositionContainer: {
    position: "relative",
    width: "100%",
    height: "55rem",

    [theme.breakpoints.down("sm")]: {
      height: "35rem",
    },
  },
  image: {
    position: "absolute",
    outlineOffset: "1rem",
    height: "40rem",
    width: "32.5rem",
    zIndex: 1,
    transition: "all .5s ease",

    "&:hover": {
      outline: `1rem solid #D95032`,
      transform: "scale(1.05) translateY(.5rem)",
      zIndex: 10,
    },
  },
  imagePrimary: {
    right: 30,
    top: 0,

    [theme.breakpoints.down("md")]: {
      right: "-5%",
      top: "15%",
    },

    [theme.breakpoints.down("sm")]: {
      top: "0",
      right: "0",
      height: "35rem",
      width: "100%",
    },
  },
  imageSecondary: {
    bottom: "-10%",
    left: 15,
  },
  box: {
    backgroundColor: "#395D73",
    height: "32.5rem",
    width: "50rem",
    position: "absolute",
    top: "25%",
    right: "-2rem",
  },
}))
