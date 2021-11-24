import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection"
import ProjectsSection from "../components/ProjectsSection/ProjectsSection"
import ContactSection from "../components/ContactSection/ContactSection"

import "../components/animations.css"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 1440 750'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='1440' height='750' x='0' y='0' fill='rgba(21%2c 47%2c 64%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c502.325C121.784%2c519.452%2c250.846%2c617.525%2c357.438%2c556.185C463.025%2c495.423%2c433.406%2c331.815%2c486.678%2c222.258C541.839%2c108.817%2c667.884%2c28.873%2c675.083%2c-97.062C682.621%2c-228.928%2c617.395%2c-360.486%2c525.407%2c-455.268C435.582%2c-547.822%2c307.272%2c-598.547%2c178.684%2c-608.542C62.365%2c-617.583%2c-40.131%2c-549.45%2c-149.072%2c-507.692C-248.456%2c-469.597%2c-364.35%2c-456.504%2c-432.103%2c-374.419C-499.409%2c-292.876%2c-491.97%2c-177.551%2c-507.854%2c-73.018C-523.876%2c32.426%2c-564.249%2c140.619%2c-525.458%2c239.969C-485.97%2c341.104%2c-395.319%2c415.482%2c-298.183%2c463.981C-206.671%2c509.672%2c-101.287%2c488.08%2c0%2c502.325' fill='%23112633'%3e%3c/path%3e%3cpath d='M1440 1260.805C1544.468 1263.484 1653.445 1274.9679999999998 1745.018 1224.618 1839.282 1172.788 1909.196 1082.291 1947.4940000000001 981.765 1984.5259999999998 884.562 1972.839 778.395 1953.99 676.099 1935.748 577.094 1916.165 469.451 1840.799 402.706 1767.739 338.003 1652.723 369.172 1563.295 330.097 1454.513 282.565 1382.22 139.606 1264.025 150.68600000000004 1148.943 161.47400000000005 1064.542 277.206 1014.75 381.519 969.844 475.595 1026.144 585.248 1007.626 687.8340000000001 988.048 796.29 875.997 888.182 904.051 994.76 931.979 1100.8600000000001 1046.6 1160.446 1144.872 1209.228 1236.173 1254.55 1338.102 1258.192 1440 1260.805' fill='%2319384d'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='750' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
  },
  sectionContainer: {
    maxWidth: "1280px",
    margin: "auto",
  },
  heroContainer: {
    height: "100vh",
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item id="section-hero" className={classes.heroContainer}>
        <HeroSection />
      </Grid>

      <Grid item id="section-about" className={classes.sectionContainer}>
        <AboutSection />
      </Grid>

      <Grid item id="section-projects" className={classes.sectionContainer}>
        <ProjectsSection />
      </Grid>

      <Grid item id="section-contact" className={classes.sectionContainer}>
        <ContactSection />
      </Grid>
    </Grid>
  )
}

export default LandingPage
