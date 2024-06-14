import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: "GET",
        url: "https://real-time-news-data.p.rapidapi.com/search",
        params: {
          query:
            "Indian Education and competitive exams related to Btech Mtech Mba",
          limit: "6",
          time_published: "anytime",
          country: "IN",
          lang: "en",
        },
        headers: {
          "x-rapidapi-key":
            "416923ab9emshb076bee13c6f8b8p127297jsnd195ad88e32d",
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setNews(response.data.data); // Extracting data array from response
        //set one second timeout
        setInterval(() => {
            setLoading(false);  
        }, 1000);
        
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4  max-w-6xl w-full ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Latest News and Updates
      </h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((newsItem, index) => (
            <NewsCard key={index} news={newsItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
