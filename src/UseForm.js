import React, { useState } from 'react';
import ReusableInputForm from './ReusableInputForm';
import ReusableSelectForm from './ReusableSelectForm';
import './App.css'; // Assuming global styles here

const UseForm = () => {
  const [formData, setFormData] = useState({
    input1: "",
    select1: "",
    input2: "",
    select2: "",
    input3: "",
  });

  const [errors, setErrors] = useState({}); // To track validation errors

  const formFields = [
    { type: "text", name: "input1", label: "Input Field 1" },
    {
      type: "select",
      name: "select1",
      label: "Select Field 1",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ],
    },
    { type: "text", name: "input2", label: "Input Field 2" },
    {
      type: "select",
      name: "select2",
      label: "Select Field 2",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ],
    },
    { type: "number", name: "input3", label: "Number Input Field" },
  ];

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form inputs and select fields
  const validateForm = () => {
    let formErrors = {};

    // Check if fields are filled and validate email/phone
    if (!formData.input1) {
      formErrors.input1 = 'Input Field 1 is required';
    }
    if (!formData.input2) {
      formErrors.input2 = 'Input Field 2 is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.input2 && !emailPattern.test(formData.input2)) {
      formErrors.input2 = 'Invalid email format';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (formData.input3 && !phonePattern.test(formData.input3)) {
      formErrors.input3 = 'Phone number must be 10 digits';
    }

    if (!formData.select1) {
      formErrors.select1 = 'Select Field 1 is required';
    }
    if (!formData.select2) {
      formErrors.select2 = 'Select Field 2 is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Further actions can be added here (e.g., API calls)
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => {
        if (field.type === "select") {
          return (
            <ReusableSelectForm
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              options={field.options}
              onChange={handleChange}
              error={errors[field.name]} // Pass error if exists
            />
          );
        } else {
          return (
            <ReusableInputForm
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              error={errors[field.name]} // Pass error if exists
            />
          );
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseForm;
