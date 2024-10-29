// src/components/SelectField.js

import React from "react";

const ReusableSelectForm = ({ name, label, value, options, onChange ,error}) => {
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
      {error && <span style={{ color: "red" }}>{error}</span>} {/* Display error message */}

    </div>
  );
};


export default ReusableSelectForm;
