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
import FindCollege from "./pages/findcollege/FindCollege";
import CollegeDetails from "./pages/findcollege/collegeDetails/CollegeDetails";
import Ranking from "./pages/ranking/Ranking";
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

        <Route path="/mba/collegepredictor" element={<CollegePredictor type={"btech"} />} />
        <Route path="/btech/collegepredictor" element={<CollegePredictor type={"mtech"} />} />
        <Route path="/mtech/collegepredictor" element={<CollegePredictor type={"mba"} />} />

        <Route path="/btech/findcollege" element={<FindCollege type={"btech"} />} />
        <Route path="/mtech/findcollege" element={<FindCollege  type={"mtech"} />} />
        <Route path="/mtech/findcollege" element={<FindCollege  type={"mba"} />} />

        <Route path="/collegeinformation/:id" element={<CollegeDetails />} />

        <Route path="/btech/ranking" element={<Ranking />} />
        <Route path="/mtech/ranking" element={<Ranking />} />
        <Route path="/mba/ranking" element={<Ranking/>} />
        
        
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
