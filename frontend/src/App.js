import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import eventsData from './Events at IITs (1).json';
import { Route, Routes } from "react-router-dom";
import Startup from "./pages/startup/Startup";
import CompareAllCollege from "./pages/comparison/CompareAllCollege";
import CollegePredictor from "./pages/prediction/CollegePredictor";
import FindCollege from "./pages/findcollege/FindCollege";
import CollegeDetails from "./pages/findcollege/collegeDetails/CollegeDetails";
import Ranking from "./pages/ranking/Ranking";
import WelcomePage from "./pages/IIT/components/WelcomePage";
import Stemevents from "./stem/Stemevents";
import Jobpage from "./pages/Jobs/Jobpage";
import EventsDisplay from "./pages/Events/EventsDisplay";
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

        <Route path="/colleges/iit" element={<WelcomePage />} />
        <Route path="/colleges/iit/event" element={<EventsDisplay data = {eventsData} />} />
        
        <Route path="/colleges/iim" element={<WelcomePage />} />
        <Route path="/colleges/iim/event" element={<EventsDisplay data = {eventsData} />} />

        <Route path = "/stem" element = {<Stemevents/>} />
        <Route path = "/jobs" element = {<Jobpage/>} />
        
        
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
