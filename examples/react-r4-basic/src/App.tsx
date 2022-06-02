
import React, { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material'

import './App.css';

import MainPage from './pages/MainPage';
import AppHeader from './components/AppHeader';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader
        darkModeEnabled={darkMode}
        toggleVisualMode={toggleMode}
        />
      <MainPage
        useDarkMode={darkMode}
        toggleVisualMode={toggleMode}
        />
    </ThemeProvider>
  );
};
