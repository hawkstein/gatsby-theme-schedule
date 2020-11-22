import { Link } from "gatsby"
import React, { useState } from "react"
import { Box, Flex, MenuButton } from "theme-ui"
import Logo from "./logo"
import NavLink from "./nav-link"
import useScheduleOptions from "../hooks/use-schedule-options"

export default () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {
    heading,
    basePath,
    locationsLabel,
    locationsURL,
    scheduleLabel,
    scheduleURL,
    navLinks,
    actionLabel,
    actionURL,
  } = useScheduleOptions()
  return (
    <Box as="header" variant="styles.header">
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: menuOpen ? "start" : "center",
          width: "max",
          margin: "0 auto",
          px: "3",
        }}
      >
        <Link to={basePath}>
          <Logo />
        </Link>
        <Flex
          as="nav"
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: ["column", "column", "row", "row"],
          }}
        >
          <NavLink to="/" variant="styles.titleLink">
            {heading}
          </NavLink>
          <Flex
            dir="row"
            variant={menuOpen ? "styles.toggleMenu" : undefined}
            sx={{
              flexWrap: "wrap",
            }}
          >
            <NavLink
              to={scheduleURL}
              variant={menuOpen ? "styles.toggleLink" : "styles.navLink"}
            >
              {scheduleLabel}
            </NavLink>
            <NavLink
              to={locationsURL}
              variant={menuOpen ? "styles.toggleLink" : "styles.navLink"}
            >
              {locationsLabel}
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                to={link.url}
                variant={menuOpen ? "styles.toggleLink" : "styles.navLink"}
              >
                {link.label}
              </NavLink>
            ))}
          </Flex>
        </Flex>
        <NavLink to={actionURL} variant="styles.buttonLink">
          {actionLabel}
        </NavLink>
        <MenuButton
          variant="styles.menuButton"
          aria-label="Toggle Navigation Menu"
          onClick={() => {
            setMenuOpen((v) => !v)
          }}
        />
      </Flex>
    </Box>
  )
}
