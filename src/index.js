import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme"; // Ensure correct path for theme
import { ThemeProvider, CssBaseline } from "@mui/material";

const RootComponent = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
