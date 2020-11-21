import React from "react"
import { Box, Flex } from "theme-ui"
import NavLink from "./nav-link"
import useScheduleOptions from "../hooks/use-schedule-options"

export default () => {
  const { footerLinks } = useScheduleOptions()
  return (
    <Box as="footer" variant="styles.header">
      <Flex>
        {footerLinks.map((link) => (
          <NavLink to={link.url} variant={"styles.titleLink"}>
            {link.label}
          </NavLink>
        ))}
      </Flex>
    </Box>
  )
}
