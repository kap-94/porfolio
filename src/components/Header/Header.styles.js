import { makeStyles } from "@material-ui/styles"

export const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    color: theme.palette.common.white,
    fontSize: "1.65rem",
    fontWeight: 700,
    opacity: 0,
    textTransform: "capitalize",
    transform: "translateY(-1.65rem)",

    [theme.breakpoints.down("sm")]: {
      opacity: 1,
    },
  },
  brand: {
    fill: theme.palette.common.white,
    fontSize: "7.5rem",
    opacity: 0,

    [theme.breakpoints.down("sm")]: {
      fontSize: "4.5rem",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
  },
  drawerIcon: {
    fill: theme.palette.secondary.main,
    fontSize: "3.25rem",
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    width: "20rem",
  },
  drawerItem: {
    ...theme.typography.tab,
    fontSize: "1.55rem",
    color: theme.palette.primary.main,
  },
  anchorLink: {
    textDecoration: "none",
  },
}))
