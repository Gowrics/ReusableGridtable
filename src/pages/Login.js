import React, { useState } from "react";
import SelectField from "../component/SelectField"; // Make sure this exists
import InputField from "../component/InputField"; // Make sure this exists
import { Container, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FormPage1 = () => {
  const [formData, setFormData] = useState({
    userName: "",  // Use an empty string instead of null
    password: "",  // Use an empty string instead of null
  });

  const [errors, setErrors] = useState({});

  const formFields = [
    { type: "text", name: "userName", label: "Enter Username" }, // Match the name here
    { type: "password", name: "password", label: "Enter Password" },
  ];

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    const newErrors = {};
    if (!formData.userName) newErrors.userName = "User Name is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    // Proceed if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <Container maxWidth="sm" >
      <Box
        sx={{
          marginTop: 5,
          padding: 3,
          marginLeft:{ xs: 2, sm: 6 },
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Form Title */}
        <Typography variant="h4" gutterBottom align="center">
          Login Form
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => {
            return (
              <InputField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            );
          })}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button><br></br>
          <Typography variant="h6" align="center">
  If you're a new user, go to <Link to="/register">Registration Page</Link>
</Typography>
        </form>
      </Box>
    </Container>
  );
};

export default FormPage1;
