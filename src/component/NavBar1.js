import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar1 = () => {
  return (
    <AppBar position="static">
      <Toolbar>

        {/* Navigation Links */}
        <Box>
        {/* Website Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
    
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar1;
