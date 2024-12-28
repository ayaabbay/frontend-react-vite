// src/components/header/Header.js
import "./Header.css";
import { IconButton, Box, Stack, InputBase, styled, Toolbar, useTheme } from "@mui/material";
import { MenuIcon } from "lucide-react";
import MuiAppBar from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box style={{ display: 'flex' }} />
        <Stack direction={"row"} spacing={2} alignItems="center">
          {theme.palette.mode === "light" ? (
            <IconButton onClick={() => {
              localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
            }} color="inherit">
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => {
              localStorage.setItem("currentMode", theme.palette.mode === "dark" ? "light" : "dark")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
            }} color="inherit">
              <DarkModeOutlinedIcon />
            </IconButton>
          )}
          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleProfileClick}>
            <Person2OutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <LogoutOutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;



// si je veau pas statique 

/* // @ts-nocheck
//import React from "react";
import "./Header.css";
import { IconButton, Box, Stack, InputBase, styled, Toolbar, Typography, useThemeProps, useTheme } from "@mui/material";
import { MenuIcon } from "lucide-react";
import MuiAppBar from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
  
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <AppBar position="fixed"
      // @ts-ignore
      open={open}
      
      >
      <Toolbar  sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 2,
            },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        </Box>

        <Box style={{ display: 'flex' }} />

        <Stack direction={"row"} spacing={2} alignItems="center">

          {theme.palette.mode === "light" ? (
            <IconButton onClick={() => {
                localStorage.setItem("currentMode",theme.palette.mode === "dark"? "light":"dark")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );

            }} color="inherit">
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => {
              localStorage.setItem("currentMode",theme.palette.mode === "dark"? "light":"dark")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
            }} color="inherit">
              <DarkModeOutlinedIcon />
            </IconButton>
          )}
          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>

          <IconButton color="inherit" onClick={handleProfileClick}>
            <Person2OutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <LogoutOutlinedIcon />
          </IconButton>



        </Stack>


      </Toolbar>
    </AppBar>
  )
}
export default Header;

 */
