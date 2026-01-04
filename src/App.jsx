import React, { useEffect, useState } from "react";
import "./App.css";

import Loader from "./Components/Loader.jsx"; // Import loader

import march from "./assets/10.jpeg";
import april from "./assets/10.jpeg";
import may from "./assets/10.jpeg";
import june from "./assets/10.jpeg";
import july from "./assets/10.jpeg";
import august from "./assets/10.jpeg";
import september from "./assets/10.jpeg";
import october from "./assets/10.jpeg";

export default function App() {
  const [loading, setLoading] = useState(true); // State to control loader
  const images = [march, april, may, june, july, august, september, october];

  useEffect(() => {
    // Simulate loading (fireworks show for 5 seconds)
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const card = document.querySelector(".card");

      // Glitter
      for (let i = 0; i < 40; i++) {
        const glitter = document.createElement("div");
        glitter.className = "glitter";
        glitter.style.top = Math.random() * 100 + "%";
        glitter.style.left = Math.random() * 100 + "%";
        glitter.style.animationDelay = Math.random() * 2 + "s";
        card.appendChild(glitter);
      }

      // Shooting stars
      const starsInterval = setInterval(() => {
        const star = document.createElement("div");
        star.className = "shooting-star";
        card.appendChild(star);
        setTimeout(() => card.removeChild(star), 2000);
      }, 1500);

      return () => clearInterval(starsInterval);
    }
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div className="card">
      <div className="content">
        <h1>Happy New Year Love❤️</h1>
        <p className="subtitle">
          From March until today, every moment has brought me closer to you…
        </p>

        <div className="timeline">
          {images.map((src, index) => (
            <div className="timeline-item" key={index}>
              <div className="road-curve"></div>
              <img src={src} className="bond-photo" alt={`Month ${index + 1}`} />
              {/* <p className="month-label">{`Month ${index + 1}`}</p> */}
            </div>
          ))}
        </div>

        <div className="special-note">
          <h2>✨ 2026 With You ✨</h2>
          <p>The year a minute ago was the best of my life, I Found You.</p>
          <p>
            Hopping to this year bring more laughter, love, and unforgettable
            memories for us 💚
          </p>
          <div className="heart">❤️✨</div>
        </div>

        <p className="final-note">
          My words are limited to describe my love towards you 💌
          BE MINE FOREVER 🥀
        </p>
      </div>
    </div>
  );
}
