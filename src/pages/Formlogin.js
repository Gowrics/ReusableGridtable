// FormPage1.js
import React from "react";

import { Link } from "react-router-dom";
import ReusableForm from "../component/Reusableform";

const FormUse = () => {
  const formFields = [
    { type: "text", name: "userName", label: "Enter Username" },
    { type: "password", name: "password", label: "Enter Password" },
  ];

  const handleLoginSubmit = (formData) => {
    console.log("Login Form Data:", formData);
  };

  return (
    <div>
      <ReusableForm formFields={formFields} onSubmit={handleLoginSubmit} title="Login Form" />
      <p>
        If you're a new user, go to <Link to="/form">Registration Page</Link>
      </p>
    </div>
  );
};

export default FormUse;
