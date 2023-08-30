import React from "react";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/pages/Login";
import { Registration } from "./component/pages/Registration";
import Movis from "./component/Movis/Movis";
import CompanyInfo from "./component/Movis/CompanyInfo"

export const App = () => {
  return (
    <div>
      

      <Routes>
        <Route key="Login" path="/" element={<Login />} />
        <Route key="register" path="/register" element={<Registration />} />
        <Route key="Login" path="/login" element={<Login />} />
        <Route key="Movis" path="/movies" element={
        <>
        <Navbar />
        <Movis />
        </>
        } />
        <Route key="CompanyInfo" path="/CompanyInfo" element={<>
          <Navbar />
          <CompanyInfo />
        </>} />




      </Routes>
    </div>
  );
};
