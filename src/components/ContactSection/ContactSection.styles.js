import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: "8rem 0",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  title: {
    color: theme.palette.common.white,
    marginBottom: "3rem",
  },
  body: {
    margin: "auto",
    width: "50%",
    marginBottom: "3rem",
  },
}))
