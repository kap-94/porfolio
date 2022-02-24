import { makeStyles } from "@material-ui/core/styles"
import Image from "../../images/v1016-a-08.jpg"

export const useStyles = makeStyles(theme => ({
  fullContainer: {
    backgroundColor: theme.palette.primary.main,
    clipPath: "polygon(0 0, 100% 0, 100% 80vh, 0 100%)",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1280px",
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    height: "92vh",

    [theme.breakpoints.down("lg")]: {
      padding: "0 5vw",
    },

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  textContainer: {},
  title: {
    marginBottom: "2.5rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
    },
  },
  body: {
    fontSize: "1.8rem",
    width: "55%",

    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  heroItem: {
    opacity: 0,
    transform: "translateY(5rem)",
  },
}))
