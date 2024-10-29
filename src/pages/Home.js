import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="md">
      {/* Main Box Wrapper for the content */}
      <Box
        sx={{
          textAlign: 'center',  // Centering the content
          marginTop: 8,         // Adds spacing on top
          padding: 4,           // Padding for the box content
          boxShadow: 3,         // Adds shadow for a card-like feel
          borderRadius: 2,      // Rounded corners for better design
          backgroundColor: '#f5f5f5' // Light background color for the box
        }}
      >
        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Home Page
        </Typography>

        {/* Subtitle */}
        <Typography variant="body1" paragraph>
          This is a beautifully designed home page using Material-UI.
          Explore more by navigating to the form page.
        </Typography>

        {/* Button linking to the form page */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
          sx={{ mt: 3 }}
    >
    Go to Form Page
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
