// src/pages/RegistrationForm.js
import React from "react";
import { Container, Typography } from "@mui/material";
import ReusableForm from "../component/Reusableform";

const RegistrationForm = () => {
  const formFields = [
    { type: "text", name: "name", label: "Enter Name" },
    { type: "select", name: "gender", label: "Select Gender", options: [{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }] },
    { type: "email", name: "email", label: "Enter Your Email" },
    { type: "select", name: "city", label: "Enter City" },
    { type: "date", name: "dob", label: "Select Date of Birth" },
    { type: "text", name: "phno", label: "Enter Phone Number" },
  ];

  const handleSubmit = (data) => {
    console.log("Registration Data:", data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Registration Form
      </Typography>
      <ReusableForm formFields={formFields} onSubmit={handleSubmit} />
    </Container>
  );
};

export default RegistrationForm;
