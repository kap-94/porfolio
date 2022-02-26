import { createTheme } from "@material-ui/core/styles"

const white = "#F4F0F4"
const purpleBlue = "#3A0FE5"
const darkBlue = "#190035"
const golden = "#E6A71C"

const mainFont = "Poppins, sans-serif"

const theme = createTheme({
  palette: {
    common: {
      white: "#F4F0F4",
    },
    primary: {
      main: purpleBlue,
    },
    secondary: {
      main: golden,
    },
    background: {
      default: purpleBlue,
    },
  },
  typography: {
    // htmlFontSize: 10,
    h1: {
      color: white,
      fontFamily: mainFont,
      fontSize: "6.4rem",
      fontWeight: 600,

      // [`@media screen and (max-width: 1200px)`]: {
      //   fontSize: "4rem",
      // },
    },
    h2: {
      color: darkBlue,
      fontFamily: mainFont,
      fontSize: "4rem",
      fontWeight: 600,
    },
    h3: {
      color: white,
      fontFamily: mainFont,
      fontSize: "2.4rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.7rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
    h5: {
      color: darkBlue,
      fontFamily: mainFont,
      fontSize: "1.7rem",
      fontWeight: 600,
    },
    subtitle1: {
      color: golden,
      fontFamily: mainFont,
      fontSize: "1.6rem",
      fontWeight: 600,
    },
    body1: {
      color: white,
      fontFamily: mainFont,
      fontSize: "1.7rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    body2: {
      color: darkBlue,
      fontFamily: mainFont,
      fontWeight: 500,
      lineHeight: 1.75,
      fontSize: "1.7rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "62.5%",

          [`@media screen and (max-width: 1280px)`]: {
            fontSize: "56.25%",
          },

          // [`@media screen and (max-width: 900px)`]: {
          //   fontSize: "50%",
          // },
        },
        margin: "0px",
        body: {
          boxSizing: "border-box",
          fontFamily: "Poppins, sans-serif",
          margin: "0px",
        },
      },
    },
  },
})

export default theme
