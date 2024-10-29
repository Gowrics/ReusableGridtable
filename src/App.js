import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./pages/Registration";
import HomePage from "./pages/Home";
import NavBar from "./component/NavBar";
import FormPage1 from "./pages/Login";
import RegistrationForm from "./pages/Formregister";
import FormUse from "./pages/Formlogin";
import UsersTable from "./pages/UsersTable";
import SideBar from "./component/SideBar";
import NavBar1 from "./component/NavBar1";

const App = () => {
  return (
    <Router>
      <NavBar/>  
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<FormPage />} />
        <Route path="/login" element={< FormPage1/>} />
        <Route path="/table" element={< UsersTable/>} />
        </Routes>
    </Router>
  );
};

export default App;
{/*
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<FormPage />} />--right one
        <Route path="/login" element={< FormPage1/>} />
  
  
 <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={< FormUse/>} />  </Routes>

        */}
