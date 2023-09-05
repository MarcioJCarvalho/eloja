import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Shell.css';

function Shell() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="static" className={open ? 'shellChild open' : 'shellChild'}>
        <Toolbar>
          <IconButton
            onClick={toggleDrawerOpen}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Typography variant="h6" component="div" onClick={() => navigate('/')}>
              Eloja
            </Typography>
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button
            onClick={() => {
              navigate('/login');
            }}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: '240px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className="drawerHeader">
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate('/cadastro-empresa');
                setOpen(false);
              }}
            >
              <ListItemText primary="Cadastro de empresa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Item2" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <div className={open ? 'shellChild open' : 'shellChild'}>
        <Outlet />
      </div>
    </div>
  );
}

export default Shell;
