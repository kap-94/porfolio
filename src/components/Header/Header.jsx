import React, { useState } from "react"

import { AnchorLink } from "gatsby-plugin-anchor-links"

import { useTheme } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"

import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Toolbar from "@material-ui/core/Toolbar"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import MenuIcon from "@material-ui/icons/Menu"

import { useStyles } from "./Header.styles"

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("sm"))

  const [activeTab, setActiveTab] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleChange = (e, activeTab) => {
    setActiveTab(activeTab)
  }

  const routes = [
    { id: 0, name: "01. Home", link: "/#section-hero" },
    { id: 1, name: "02. About Me", link: "/#section-about" },
    { id: 2, name: "03. Projects", link: "/#section-projects" },
    { id: 3, name: "04. Contact", link: "/#section-contact" },
  ]

  const tabs = (
    <React.Fragment>
      <Tabs value={activeTab} classes={{ root: classes.tabs }}>
        {routes.map((route, id) => (
          <AnchorLink key={id} className={classes.anchorLink} to={route.link}>
            <Tab
              disableRipple
              onChange={e => handleChange(e, id)}
              classes={{ root: classes.tab }}
              label={route.name}
            />
          </AnchorLink>
        ))}
      </Tabs>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {routes.map((route, id) => (
            <AnchorLink key={id} className={classes.anchorLink} to={route.link}>
              <ListItem
                selected={activeTab === id}
                onClick={() => {
                  setOpenDrawer(false)
                  setActiveTab(id)
                }}
                divider
                button
              >
                <ListItemText
                  primary={route.name}
                  className={classes.drawerItem}
                  disableTypography
                />
              </ListItem>
            </AnchorLink>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar classes={{ root: classes.toolbar }}>
          <Button disableRipple>
            <AnchorLink to="/#section-hero" className={classes.anchorLink}>
              <Typography variant="h2" classes={{ root: classes.brand }}>
                K
              </Typography>
            </AnchorLink>
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

export default Header
