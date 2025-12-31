// src/components/Loader.jsx
import React from "react";
import "./Loader.css";

export default function Loader() {
  const sparks = Array.from({ length: 20 });

  return (
    <div className="loader">
      {sparks.map((_, i) => (
        <div key={i} className="spark" style={{ "--i": i }}></div>
      ))}
      <div className="loader-text">✨ Happy New Year Love ✨</div>
    </div>
  );
}
