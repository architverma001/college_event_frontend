import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Startup from "./pages/startup/Startup";
import CompareAllCollege from "./pages/comparison/CompareAllCollege";
import CollegePredictor from "./pages/prediction/CollegePredictor";
function App() {

  return (
    <div className="">
      <Navbar />

      <Routes className="">
        <Route path="/" element={<HomePage />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/btech/comparecollege" element={<CompareAllCollege type={"btech"} />} />
        <Route path="/mtech/comparecollege" element={<CompareAllCollege type={"mtech"} />} />
        <Route path="/mba/comparecollege" element={<CompareAllCollege type={"mba"} />} />

        <Route path="/mba/collegepredictor" element={<CollegePredictor type={"mba"} />} />
        <Route path="/btech/collegepredictor" element={<CollegePredictor type={"mba"} />} />
        <Route path="/mtech/collegepredictor" element={<CollegePredictor type={"mba"} />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
