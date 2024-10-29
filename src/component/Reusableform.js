// ReusableForm.js
import React, { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import SelectField from "./SelectField";
import InputField from "./InputField";

const ReusableForm = ({ formFields, onSubmit, title }) => {
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      acc[field.name] = ""; // Initialize fields
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    formFields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 5,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          {title}
        </Typography>

        <form onSubmit={handleSubmit}>
          {formFields.map((field) => {
            return field.type === "select" ? (
              <SelectField
                key={field.name}
                name={field.name}
                label={field.label}
                value={formData[field.name]}
                options={field.options}
                onChange={handleChange}
                error={errors[field.name]}
              />
            ) : (
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

export default ReusableForm;
