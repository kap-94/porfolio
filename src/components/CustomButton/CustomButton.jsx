import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import "../animations.css"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #D95032",
    color: "#D95032",
    cursor: "pointer",
    display: "inline-block",
    textTransform: "uppercase",
    texDecoration: "none",
    padding: "1.5rem 4rem",
    position: "relative",

    animationName: "moveInDown",
    animationDuration: "4s",
    animationTimingFunction: "ease",

    transition: ".3s all ease",

    "&:link, &:visited": {
      textDecoration: "none",
    },

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
      boxShadow: "0 1rem 2rem rgba(black, .15)",
      transform: "translateY(-2px)",
    },

    "&:active": {
      boxShadow: "0 .5rem 1rem rgba(black, .15)",
      transform: "translateY(0)",
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
    <a href={href} className={classes.button}>
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
