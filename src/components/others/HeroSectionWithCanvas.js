import React, { useRef, useMemo, useState, Suspense } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import "../animations.css"
import { UnsubscribeTwoTone } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 1440 750'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='1440' height='750' x='0' y='0' fill='rgba(21%2c 47%2c 64%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c502.325C121.784%2c519.452%2c250.846%2c617.525%2c357.438%2c556.185C463.025%2c495.423%2c433.406%2c331.815%2c486.678%2c222.258C541.839%2c108.817%2c667.884%2c28.873%2c675.083%2c-97.062C682.621%2c-228.928%2c617.395%2c-360.486%2c525.407%2c-455.268C435.582%2c-547.822%2c307.272%2c-598.547%2c178.684%2c-608.542C62.365%2c-617.583%2c-40.131%2c-549.45%2c-149.072%2c-507.692C-248.456%2c-469.597%2c-364.35%2c-456.504%2c-432.103%2c-374.419C-499.409%2c-292.876%2c-491.97%2c-177.551%2c-507.854%2c-73.018C-523.876%2c32.426%2c-564.249%2c140.619%2c-525.458%2c239.969C-485.97%2c341.104%2c-395.319%2c415.482%2c-298.183%2c463.981C-206.671%2c509.672%2c-101.287%2c488.08%2c0%2c502.325' fill='%23112633'%3e%3c/path%3e%3cpath d='M1440 1260.805C1544.468 1263.484 1653.445 1274.9679999999998 1745.018 1224.618 1839.282 1172.788 1909.196 1082.291 1947.4940000000001 981.765 1984.5259999999998 884.562 1972.839 778.395 1953.99 676.099 1935.748 577.094 1916.165 469.451 1840.799 402.706 1767.739 338.003 1652.723 369.172 1563.295 330.097 1454.513 282.565 1382.22 139.606 1264.025 150.68600000000004 1148.943 161.47400000000005 1064.542 277.206 1014.75 381.519 969.844 475.595 1026.144 585.248 1007.626 687.8340000000001 988.048 796.29 875.997 888.182 904.051 994.76 931.979 1100.8600000000001 1046.6 1160.446 1144.872 1209.228 1236.173 1254.55 1338.102 1258.192 1440 1260.805' fill='%2319384d'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='750' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
    // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1000' preserveAspectRatio='none' viewBox='0 0 1440 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1027%26quot%3b)' fill='none'%3e%3cpath d='M54 1000L1054 0L2264.5 0L1264.5 1000z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M1358 1000L358 0L-92 0L908 1000z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3cpath d='M660.5063775893839 1000L1440 220.50637758938387L1440 1000z' fill='url(%23SvgjsLinearGradient1028)'%3e%3c/path%3e%3cpath d='M0 1000L779.4936224106161 1000L 0 220.50637758938387z' fill='url(%23SvgjsLinearGradient1029)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1027'%3e%3crect width='1440' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1028'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1029'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
  },
  textContainer: {
    padding: "5rem",
    transform: "translateX(-20%)",
    animationName: "clipPathDown",
    animationDuration: "3s",
    animationTimingFunction: "ease",

    [theme.breakpoints.down("lg")]: {
      transform: "translateX(-10%)",
    },

    [theme.breakpoints.down("md")]: {
      transform: "unset",
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  title: {
    color: "#CCD6F5",
    fontSize: "7rem",
    margin: "0",

    [theme.breakpoints.down("md")]: {
      fontSize: "6.35rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "5.5rem",
    },
  },
  subtitle: {
    lineHeight: "4rem",
    color: "#8892AF",
    fontSize: "7rem",
    margin: "0",
    marginBottom: "5rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "6.35rem",
    },

    [theme.breakpoints.down("sm")]: {
      lineHeight: "7rem",
      fontSize: "5rem",
    },
  },
  body1: {
    fontSize: "1.8rem",
    lineHeight: "1.75rem",

    [theme.breakpoints.down("sm")]: {
      lineHeight: "3rem",
    },
  },
}))

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const Particles = () => {
  const ref = useRef()

  useFrame((state, delta) => (ref.current.rotation.y += 0.001))

  const count = 5000
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      sizes[i] = Math.random() < 0.03 ? 15 : 6
    }

    return [positions, sizes]
  })
  return (
    <mesh ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} />
      </points>
    </mesh>
  )
}

const Torus = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={event => setActive(!active)}
      // onPointerOver={event => setHover(true)}
      // onPointerOut={event => setHover(false)}
    >
      <points>
        <torusKnotBufferGeometry args={[6, 3.9, 300, 6, 9, 7]} />
        <pointsMaterial color="hotpink" size={0.05} />
      </points>
    </mesh>
  )
}

const HTMLContent = () => {
  const classes = useStyles()

  return (
    <Html fullscreen>
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <h1 className={classes.title}>Pablo Karam</h1>
          <h2 className={classes.subtitle}>I build things for the web</h2>

          <p className={classes.body1}>
            I'm a business graduate and a software developer enthusiast
          </p>
          <p className={classes.body1}>
            who thinks that you can improve the strategy of any business trough
            out
          </p>
          <p className={classes.body1}>the power of technology</p>

          <button className={classes.button}>Resumen</button>
        </div>
      </div>
    </Html>
  )
}

const HeroSection = () => {
  const classes = useStyles()

  return (
    <Grid container classes={{ root: classes.mainContainer }}>
      <Grid item>
        <div>
          <div className={classes.textContainer}>
            <h1 className={classes.title}>Pablo Karam</h1>
            <h2 className={classes.subtitle}>I build things for the web</h2>

            <p className={classes.body1}>
              I'm a business graduate and a software developer enthusiast
            </p>
            <p className={classes.body1}>
              who thinks that you can improve the strategy of any business
              trough out
            </p>
            <p className={classes.body1}>the power of technology</p>

            <button className={classes.button}>Resumen</button>
          </div>
        </div>
      </Grid>
    </Grid>

    // <Grid container classes={{ root: classes.mainContainer }}>
    // <Grid item>
    // <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 3 }}>
    //   <perspectiveCamera
    //     fov={75}
    //     aspect={sizes.width / sizes.height}
    //     position={[0, 0, 3]}
    //     near={0.1}
    //     far={100}
    //   />
    //   <HTMLContent />
    //   <ambientLight />

    //   <Particles />
    //   <OrbitControls />
    //   <Torus />
    // </Canvas>
    // </Grid>
    // </Grid>
  )
}

export default HeroSection
