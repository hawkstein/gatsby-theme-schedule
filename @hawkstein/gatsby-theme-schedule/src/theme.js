const baseLink = {
  fontFamily: "body",
  color: "background",
  textDecoration: "none",
  mx: [1, 1, 2, 4],
  textTransform: "uppercase",
  transition: "all 0.2s linear",
  letterSpacing: 2,
}

export const theme = {
  breakpoints: ["360px", "768px", "1366px", "1900px"],
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#fff",
    primary: "black",
  },
  sizes: {
    default: "100%",
    max: "1366px",
  },
  text: {
    heading: {
      backgroundColor: "primary",
      color: "background",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit",
      },
    },
    dayHeading: {
      color: "primary",
      backgroundColor: "none",
      my: 3,
    },
    event: {
      title: {
        textDecoration: "none",
        color: "gray.2",
        backgroundColor: "gray.0",
        py: 2,
        fontWeight: "bold",
      },
      description: {
        marginTop: 2,
        color: "gray.2",
      },
    },
  },
  links: {
    day: {
      color: "primary",
      bg: "background",
      marginRight: 3,
      padding: 2,
      textDecoration: "none",
    },
    activeDay: {
      color: "background",
      bg: "primary",
      borderRadius: "3px",
      marginRight: 3,
      padding: 2,
      textDecoration: "none",
      "&:hover": {
        color: "background",
      },
    },
  },
  layout: {
    container: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3,
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
    },
  },
  styles: {
    root: {
      margin: 0,
    },
    h1: {
      color: "gray.3",
      fontSize: 5,
      lineHeight: "heading",
    },
    header: {
      maxWidth: "100%",
      backgroundColor: "primary",
      px: 0,
      py: 4,
    },
    titleLink: {
      ...baseLink,
    },
    navLink: {
      ...baseLink,
      display: ["none", "none", "block", "block"],
    },
    toggleLink: {
      ...baseLink,
      display: "block",
      mb: 4,
      fontSize: 4,
    },
    buttonLink: {
      ...baseLink,
      border: "1px solid white",
      padding: 2,
      borderRadius: "3px",
      display: ["none", "none", "block", "block"],
    },
    menuButton: {
      ...baseLink,
      border: "1px solid white",
      width: "auto",
      height: "auto",
      borderRadius: "3px",
      display: ["block", "block", "none", "none"],
    },
    toggleMenu: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "primary",
      flexDirection: "column",
      padding: 4,
      alignItems: "center",
    },
  },
}

export default theme
