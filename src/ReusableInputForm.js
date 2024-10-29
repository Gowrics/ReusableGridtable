import React from "react";

const ReusableInputForm = ({ name, label, value, onChange, type = "text", error }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
      {error && <span style={{ color: "red" }}>{error}</span>} {/* Display error message */}
    </div>
  );
};

export default ReusableInputForm;