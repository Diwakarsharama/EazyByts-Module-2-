import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/";

// Color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A48",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#a3e3a3",
          200: "#79c879",
          300: "#4fa04f",
          400: "#2e7a2e",
          500: "#1c541c",
          600: "#144114",
          700: "#0c2e0c",
          800: "#061b06",
          900: "#031003",
        },
        blueAccent: {
          100: "#a3d1e8",
          200: "#79b6d0",
          300: "#4f9bc8",
          400: "#2e7fa0",
          500: "#1c6581",
          600: "#144c62",
          700: "#0c3450",
          800: "#06273d",
          900: "#03172a",
        },
        redAccent: {
          100: "#f59c9c",
          200: "#f07575",
          300: "#e74f4f",
          400: "#d52a2a",
          500: "#b31717",
          600: "#8c1010",
          700: "#670b0b",
          800: "#440707",
          900: "#2a0303",
        },
      }
    : {
        grey: {
          900: "#141414",
          800: "#292929",
          700: "#3d3d3d",
          600: "#525252",
          500: "#666666",
          400: "#858585",
          300: "#a3a3a3",
          200: "#c2c2c2",
          100: "#e0e0e0",
        },
        primary: {
          900: "#040509",
          800: "#080b12",
          700: "#0c101b",
          600: "#101624",
          500: "#141b2d",
          400: "#434957",
          300: "#727681",
          200: "#a1a4ab",
          100: "#d0d1d5",
        },
        greenAccent: {
          100: "#a3e3a3",
          200: "#79c879",
          300: "#4fa04f",
          400: "#2e7a2e",
          500: "#1c541c",
          600: "#144114",
          700: "#0c2e0c",
          800: "#061b06",
          900: "#031003",
        },
        blueAccent: {
          100: "#a3d1e8",
          200: "#79b6d0",
          300: "#4f9bc8",
          400: "#2e7fa0",
          500: "#1c6581",
          600: "#144c62",
          700: "#0c3450",
          800: "#06273d",
          900: "#03172a",
        },
        redAccent: {
          100: "#f59c9c",
          200: "#f07575",
          300: "#e74f4f",
          400: "#d52a2a",
          500: "#b31717",
          600: "#8c1010",
          700: "#670b0b",
          800: "#440707",
          900: "#2a0303",
        },
      }),
});

// MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      primary: { main: colors.primary[500] },
      background: {
        default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
