import React, { useState } from "react";
import SelectField from "../component/SelectField";
import InputField from "../component/InputField";
import { Container, Box, Button, Typography } from "@mui/material";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: null,   // Initialize as null instead of an empty string
    gender: null,
    email: null,  
    city: null,
    dob: null,
    phno: null, 
    password:null,
    reEnterPassword:null
  });  
  const [errors, setErrors] = useState({});

  const formFields = [
    { type: "text", name: "name", label: "Enter Name" },
  
    {
      type: "select",
      name: "gender",
      label: "Select Gender",
      options: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
    },
    { type: "email", name: "email", label: "Enter Your Email" },
    { type: "Phone Number", name: "phno", label: "Enter Your Phone number" },
 
    {
      type: "select",
      name: "city",
      label: "Select Your City",
      isTrue: true, // Set to true to show "All" option
      options: [
        { value: "chennai", label: "Chennai" },
        { value: "madurai", label: "Madurai" },      ],
    },
    { type: "date", name: "dob"},
    { type: "password", name: "password", label: "Enter Password" },
    { type: "password", name: "repassword", label: "Re-Enter Password" },
  
  ];

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation example
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.phno) newErrors.phno = "Phone number is required";
  
    setErrors(newErrors);
  
    // Proceed if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 5,
          padding: 3,
          marginLeft:{ xs: 2, sm: 20 },
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Form Title */}
        <Typography variant="h4" gutterBottom align="center">
          Registration Form
        </Typography>

        {/* Form */}
        
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => {
            if (field.type === "select") {
              return (
                <SelectField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  value={formData[field.name]}
                  options={field.options}
                  allMenutext={field.allMenutext}
                  isTrue={field.isTrue} // Pass isTrue prop
                  onChange={handleChange}
                  error={errors[field.name]}
                />
              );
            } else {
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
            }
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
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default FormPage;
