import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    "&, &:link, &:visited": {
      backgroundColor: theme.palette.common.white,
      borderRadius: "10rem",
      border: "none",
      color: theme.palette.primary.main,
      cursor: "pointer",
      display: "inline-block",
      fontSize: "1.75rem",
      padding: "1.5rem 4.5rem",
      position: "relative",
      textTransform: "uppercase",
      textDecoration: "none",
      transition: "all .2s",

      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: `0 1rem 2rem rgba(0, 0, 0, .2)`,

        "&::after": {
          transform: "scaleX(1.4) scaleY(1.6)",
          opacity: 0,
        },
      },

      "&:active, &:focus": {
        outline: "none",
        transform: "translateY(-1px)",
        boxShadow: "0 .5rem 1rem rgba(0, 0, 0,.2)",
      },

      "&::after": {
        content: '""',
        display: "inline-block",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        borderRadius: "10rem",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        transition: "all .4s",
      },
    },
  },
}))

export const Button = ({ children }) => {
  const classes = useStyles()
  return <button className={classes.button}>{children}</button>
}

export const AnchorButton = ({ children, href }) => {
  const classes = useStyles()
  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes.button}>
      {children}
    </a>
  )
}

export const DownloadButton = ({ children, href, downloadTitle }) => {
  const classes = useStyles()
  return (
    <a className={classes.button} href={href} download={downloadTitle}>
      {children}
    </a>
  )
}
