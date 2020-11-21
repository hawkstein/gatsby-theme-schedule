// Based on code from https://paulie.dev/posts/2020/04/typescript-theme-ui-link/
/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"
import { Link, GatsbyLinkProps } from "gatsby"
import React, { AnchorHTMLAttributes } from "react"
import theme from "../gatsby-plugin-theme-ui"

export interface NavLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    GatsbyLinkProps<{}> {
  sx?: SxStyleProp
  variant?: string
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  sx,
  variant,
  ...rest
}) => {
  const baseStyle = variant
    ? variant.split(".").reduce((a, b) => a[b], theme)
    : theme.styles.a
  return (
    <Link
      to={to}
      sx={{ ...baseStyle, ...sx }}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </Link>
  )
}

export default NavLink
