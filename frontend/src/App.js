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
import CollegeList from "./pages/BtechMtecMba/CollegeList";
function App() {

  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/comparecollege" element={<CompareAllCollege  />} />
        <Route path="collegepredictor" element={<CollegePredictor type={"btech"} />} />
        <Route path="/findcollege" element={<FindCollege  />} />
        <Route path="/collegeinformation/:id" element={<CollegeDetails />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/events" element={<EventsDisplay data = {eventsData} />} />
        <Route path="/colleges/iit" element={<WelcomePage />} />
        <Route path="/colleges/iit/event" element={<EventsDisplay data = {eventsData} />} />
        <Route path="/btech/college" element={<CollegeList course = "btech"/>}/>
        <Route path="/mtech/college" element={<CollegeList course = "mtech"/>}/>
        <Route path="/mba/college" element={<CollegeList course = "mba"/>}/>
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
