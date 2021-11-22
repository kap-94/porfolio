import { makeStyles } from "@material-ui/styles"
import "../animations.css"

export const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  toolbar: {},
  tabs: {
    marginLeft: "auto",

    animationName: "moveInRight",
    animationDuration: "2s",
    animationFillMode: "ease-in",
  },
  tab: {
    color: "#B6DBF2",
    fontSize: "1.5rem",
    textTransform: "capitalize",
  },
  brand: {
    color: "#B6DBF2",
    fontSize: "5.5rem",
    fontWeight: "500",
    marginRight: "auto",
    animationName: "clipPathDown",
    animationDuration: "1s",
    animationTimingFunction: "ease",

    [theme.breakpoints.down("sm")]: {
      fontSize: "4.5rem",
    },
  },
  button: {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    fontSize: "1.4rem",
    textTransform: "capitalize",
  },
  drawerIconContainer: {
    marginLeft: "auto",
  },
  drawerIcon: {
    fill: theme.palette.secondary.main,
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    width: "20rem",
  },
  drawerItem: {
    ...theme.typography.tab,
    fontSize: "1.625rem",
    color: theme.palette.primary.main,
  },
  anchorLink: {
    textDecoration: "none",
  },
}))
