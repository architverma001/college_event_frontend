import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import SwipwerSlides from "./components/SwiperSlides";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/NewsCard";
import TopColleges from "./components/TopColleges/TopColleges";
import TopUniversities from "./components/TopUnivesities/TopUniversities";
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";
import Search from "./components/search/Search";
import { Route, Routes } from "react-router-dom";
import Startup from "./pages/startup/Startup";

function App() {

  return (
    <div className="">
      <Navbar />

      <Routes className="">
        <Route path="/" element={<HomePage />} />
        <Route path="/startups" element={<Startup />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
