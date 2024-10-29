import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ name, label, value, onChange, type = "text", error }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.name, e.target.value)}
      error={Boolean(error)} // MUI error prop that shows red border when true
      helperText={error} // MUI helperText prop to show error message
      sx={{ marginBottom: 2 }} // Adds bottom margin for spacing
    />
  );
};

export default InputField;
