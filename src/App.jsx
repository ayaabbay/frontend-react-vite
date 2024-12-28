import * as React from 'react';
import { createTheme, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
//import Typography from '@mui/material/Typography';
import Header from './components/header/Header';
import SideBar from './components/SideBar';
import { getDesignTokens } from './theme';
import {  BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';  

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
 

/* export default function MiniDrawer() { */

const MiniDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header handleDrawerOpen={handleDrawerOpen} open={open} setMode={setMode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet /> {/* Utilisez Outlet pour rendre les composants enfants */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const App = () => (
  <MiniDrawer />
);

export default App;