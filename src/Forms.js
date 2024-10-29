import React, { useState } from "react";

// Reusable Input Component
const InputField = ({ name, label, value, onChange, type = "text" }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

// Reusable Select Component
const SelectField = ({ name, label, value, options, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} value={value} onChange={(e) => onChange(e.target.name, e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Main Form Component
const ReusableForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    input1: "",
    select1: "",
    input2: "",
    select2: "",
    input3: "",
  });

  // Unified field configuration
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

  // Handle form data changes
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/ Render fields dynamically based on type /}
      {formFields.map((field) => {
        if (field.type === "select") {
          return (
            <SelectField
              key={field.name}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              options={field.options}
              onChange={handleChange}
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
            />
          );
        }
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReusableForm;