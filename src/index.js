import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme';
import {ThemeProvider} from "@mui/material/styles";
import {AuthProvider} from "./AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
