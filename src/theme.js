export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "monospace",
    heading: "inherit",
    monospace: "monospace",
  },
  fontSizes: [10, 15, 20, 25, 30, 40, 50, 60, 80],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#ffffff",
    background: "#1db09f",
    primary: "#003e44",
    secondary: "#008995",
    muted: "#b0b0b0",
    accent: "#ffff00",
    red: "#cb3837",
  },
  buttons: {
    add: {
      bg: "secondary",
      zIndex: "1",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
    },
    ul: {
      listStyleType: "none",
    },
  },
  layout: {
    container: {
      borderRadius: "3px",
      marginTop: "10px",
      maxWidth: "400px",
      bg: "primary",
      p: 4,
    },
    ul: {
      bg: "#fff",
      color: "secondary",
      minHeight: "300px",
      listStyleType: "none",
    },
    li: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr 1fr",
      bg: "background",
      marginBottom: "1px",
    },
    addItem: {
      display: "grid",
      gridTemplateColumns: "5fr 1fr",
      marginTop: "10px",
    },
  },
};
