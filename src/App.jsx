import React, { useEffect } from "react";
import "./App.css";

import march from "./assets/1.jpeg";
import april from "./assets/2.jpeg";
import may from "./assets/3.jpeg";
import june from "./assets/4.jpeg";
import july from "./assets/5.jpeg";
import august from "./assets/6.jpeg";
import september from "./assets/7.jpeg";
import october from "./assets/10.jpeg";

export default function App() {
  const images = [
    { src: march},
    { src: april},
    { src: may},
    { src: june},
    { src: july},
    { src: august},
    { src: september},
    { src: october}
  ];

  // Create glitter, fireworks, and shooting stars
  useEffect(() => {
    const card = document.querySelector(".card");

    // --- Glitter ---
    for (let i = 0; i < 40; i++) {
      const glitter = document.createElement("div");
      glitter.className = "glitter";
      glitter.style.top = Math.random() * 100 + "%";
      glitter.style.left = Math.random() * 100 + "%";
      glitter.style.animationDelay = Math.random() * 2 + "s";
      card.appendChild(glitter);
    }

    // --- Fireworks (first 5 seconds) ---
    const fireworksInterval = setInterval(() => {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.top = Math.random() * 60 + "%";
      firework.style.left = Math.random() * 90 + "%";
      card.appendChild(firework);

      setTimeout(() => card.removeChild(firework), 1000); // remove after animation
    }, 300);

    setTimeout(() => clearInterval(fireworksInterval), 5000); // stop after 5 sec

    // --- Shooting stars ---
    const starsInterval = setInterval(() => {
      const star = document.createElement("div");
      star.className = "shooting-star";
      card.appendChild(star);

      setTimeout(() => card.removeChild(star), 2000);
    }, 1500);

    return () => clearInterval(starsInterval);
  }, []);

  return (
    <div className="card">
      <div className="content">
        <h1>Happy New Year Love❤️</h1>
        <p className="subtitle">
          From March until today, every moment has brought me closer to you…
        </p>

        {/* Timeline of photos */}
        <div className="timeline">
          {images.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="road-curve"></div>
              <img src={item.src} className="bond-photo" alt={item.month} />
              <p className="month-label">{item.month}</p>
            </div>
          ))}
        </div>

        {/* Special Heart Section */}
        <div className="special-note">
          <h2>✨ 2026 With You Makes Me Like a Kid✨</h2>
          <p>The year a minute ago was the best of my life, I Found You.</p>
          <p>Hopping to this year bring more laughter, love, and unforgettable memories for us 💚</p>
          <div className="heart">❤️💚✨</div>
        </div>

        <p className="final-note">
          My words are limited to describe my love towards you 💌
        </p>
      </div>
    </div>
  );
}
