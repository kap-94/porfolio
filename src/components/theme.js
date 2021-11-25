import { createTheme } from "@material-ui/core/styles"

const mainBlue = "#152F40"
const blueGreyLight = "#CCD6F5"
const blueGreyLightSecondary = "#A8B2D0"
const blueGreyDark = "#8892AF"
const orangeRed = "#D95032"

const mainFont = "Roboto"

const theme = createTheme({
  palette: {
    common: {
      blue: "#B6D0F2",
    },
    primary: {
      main: mainBlue,
    },
    secondary: {
      main: orangeRed,
    },
    background: {
      default: mainBlue,
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: {
      color: blueGreyLight,
      fontFamily: mainFont,
      fontSize: "7rem",
      fontWeight: 600,
    },
    h2: {
      color: blueGreyDark,
      fontFamily: mainFont,
      fontSize: "6.35rem",
      fontWeight: 600,
    },
    h3: {
      color: blueGreyLight,
      fontFamily: mainFont,
      fontSize: "4rem",
      fontWeight: 600,
    },
    h4: {
      color: blueGreyLight,
      fontFamily: mainFont,
      fontSize: "3rem",
      fontWeight: 600,
    },
    h5: {
      color: blueGreyLight,
      fontFamily: mainFont,
      fontWeight: 600,
    },
    subtitle1: {
      color: orangeRed,
      fontFamily: mainFont,
      fontWeight: 700,
    },
    body1: {
      color: blueGreyDark,
      fontFamily: mainFont,
      fontSize: "1.7rem",
      lineHeight: 2.3,
    },
    body2: {
      color: blueGreyLightSecondary,
      fontFamily: mainFont,
      fontSize: "1.5rem",
      lineHeight: 2,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "62.5%",
        },
        margin: "0px",
        body: {
          margin: "0px",
        },
      },
    },
  },
})

export default theme
