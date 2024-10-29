import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Menu Icon for Mobile View */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ display: { xs: 'block', sm: 'none' }, position: 'absolute', top: 10, left: 10 }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer Component */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <Box sx={{backgroundColor:"blue", padding: 2 }}>
          <Typography variant="h6" align="center" gutterBottom>
            My Website
          </Typography>
        </Box>
        <Box sx={{backgroundColor:"blue", padding: 2 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/register" onClick={toggleDrawer}>
              <ListItemText primary="Registration" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login" onClick={toggleDrawer}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/table" onClick={toggleDrawer}>
              <ListItemText primary="Data Grid Table" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
      </Drawer>

      {/* Permanent Drawer for Desktop */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Box sx={{backgroundColor:"blue", padding: 2,height:"100%" }}>
        <Typography variant="h6" align="center" gutterBottom>
            My Website
          </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/register">
              <ListItemText primary="Registration" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/table">
              <ListItemText primary="Data Grid Table" />
            </ListItemButton>
          </ListItem>
        </List>      </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
