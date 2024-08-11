import { extendTheme } from "@mui/joy";
import { createTheme } from "@mui/material";

// Define all shades for the primary color
const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // Customize the primary color
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
      },
    },
  },
});

export default customTheme;
