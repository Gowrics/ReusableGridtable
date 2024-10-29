import React from "react";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";

const SelectField = ({ name, label, value, options = [], onChange, error, isTrue ,
  allMenutext}) => {
  return (
    <FormControl fullWidth variant="outlined" error={Boolean(error)} sx={{ marginBottom: 2 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      >
       
         {isTrue && <MenuItem value="All"><em>{allMenutext||"All"}</em></MenuItem>}
        {options.map((option, index) => (
          
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
