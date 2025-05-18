import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: true,
  },
  pallete: {
    primary: {
      main: "#640f12",
      light: "#ff8a80",
      dark: "#b00020",
    },
    secondary: {
      main: "#0d47a1",
      light: "#5472d3",
      dark: "#002171",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    }
  },
  typography: {
    // fontFamily: ['"PT Serif"', 'serif'].join(","),
    h2: {
      fontFamily: ['"Roboto"', 'serif'].join(","),
      // fontWeight: 700,
      // fontSize: "2rem",
      // lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },


});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme} defaultMode="system">
    <CssBaseline />
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
