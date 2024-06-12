import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import SwipwerSlides from "./components/SwiperSlides";
import HomePage from "./pages/homepage/HomePage";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import TopColleges from "./components/TopColleges/TopColleges";
import TopUniversities from "./components/TopUnivesities/TopUniversities";
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://real-time-news-data.p.rapidapi.com/search",
        params: {
          query:
            "Indian Education and competitive exams realted to Btech Mtech Mba ",
          limit: "6",
          time_published: "anytime",
          country: "IN",
          lang: "en",
        },
        headers: {
          "x-rapidapi-key":
            "39decb5f5bmsh49b7cba978a6a92p13e922jsnb192b2bb1188",
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        await setNews(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    while (news.length === 0) {
      return;
    }

    setLoading(false);
    // console.log(news);
  }, [news.length]);
  return (
    <div className="">
      <Navbar />
      <SwipwerSlides />
      <HomePage />
      <TopColleges/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {news.data.map((newsItem, index) => (
            <News key={index} news={newsItem} />
          ))}
        </div>
      )}
      <TopUniversities />
      <ExploreCourses />
      <Footer />
    </div>
  );
}

export default App;
