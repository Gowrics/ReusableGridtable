// src/UseForm1.js

import React, { useState } from "react";
import ReusableSelectForm from "./ReusableSelectForm";
import ReusableInputForm from "./ReusableInputForm";

const UseForm1 = () => {
  const [formData, setFormData] = useState({
    input1: "",
    gender: "",
    email: "",
    city: "",
    dob: "",
  });

  const [errors, setErrors] = useState({}); // State for errors

  const formFields = [
    { type: "text", name: "name", label: "Enter Name" },
    {
      type: "select",
      name: "gender",
      label: "Select Gender",
      options: [
        { value: "", label: "Select Gender" }, // Default empty option
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
    },
    { type: "text", name: "email", label: "Enter Your Email" },
    {
      type: "select",
      name: "city",
      label: "Select Your City",
      options: [
        { value: "chennai", label: "Chennai" },
        { value: "madurai", label: "Madurai" },
      ],
    },
    { type: "date", name: "dob", label: "Enter Your Date of Birth" },
  ];

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";

    setErrors(newErrors); // Set the errors in state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Perform further actions, like sending the data to an API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => {
        // Determine if the field has an error
        const error = errors[field.name];

        if (field.type === "select") {
          return (
            <ReusableSelectForm
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              options={field.options}
              onChange={handleChange}
              error={error} // Pass the error for this field
            />
          );
        } else {
          return (
            <ReusableInputForm
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              onChange={handleChange}
              type={field.type}
              error={error} // Pass the error for this field
            />
          );
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseForm1;
