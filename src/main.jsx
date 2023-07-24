import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "./theme";
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
