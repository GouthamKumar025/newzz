import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { fetchNews } from "../api/fetchNews";

const Business = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const getNews = async () => {
        const data = await fetchNews("business");
        if (data && data.data) {
          setNews(data.data);
        }
      };
      getNews();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="breaking-news">
      {/* Top News Section */}
      {news.length > 0 ? (
        <div className="topone-news">
          <div className="topone-news-content">
            <p className="news-source">{news[0]?.source || "Unknown Source"}</p>
            <h1 className="news-title">
              {news[0]?.title || "No Title Available"}
            </h1>
            <p className="news-description">
              {news[0]?.description.replace(/&#\d+;|\[.*?\]/g, "") ||
                "No description available"}
              {news[0]?.url && (
                <a
                  href={news[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read More
                </a>
              )}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading news...</p>
      )}

      {/* More News Section */}
      <div className="top-news">
        {news.slice(1, 8).map((item, index) => (
          <div className="top-news-card" key={index}>
            <div className="top-news-content">
              <p className="news-source">{item.source || "Unknown Source"}</p>
              <h2 className="news-title">
                {item.title || "No Title Available"}
              </h2>
              <p className="news-category">{item.category || "General"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
