import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [trackingId, setTrackingId] = useState("");

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      // For now, just alert - you can later route to a tracking results page
      alert(`Tracking complaint ID: ${trackingId}`);
    }
  };

  return (
    <div className="home-container fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to <span>TrackItRight</span>
        </h1>
        <p className="hero-subtitle">
          Report any civic issue, track its progress, and get it resolved efficiently.
        </p>
        <div className="hero-buttons">
          <a href="/register" className="btn primary-btn">
            Report a Complaint
          </a>
          <a href="/login" className="btn secondary-btn">
            Login
          </a>
        </div>
      </section>

      {/* Complaint Tracking Section (currently disabled) */}
      {/* 
      <section className="tracking-section">
        <h2>Track Your Complaint</h2>
        <form onSubmit={handleTrackSubmit} className="tracking-form">
          <input
            type="text"
            placeholder="Enter your tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            required
          />
          <button type="submit" className="btn primary-btn">Track</button>
        </form>
      </section> 
      */}

      {/* Info Section */}
      <section className="info-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">1</span>
            <h3>Submit</h3>
            <p>Register or log in, describe your problem, and submit a complaint with details.</p>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <h3>Track</h3>
            <p>Get a unique complaint ID and see real-time updates on its progress.</p>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <h3>Resolve</h3>
            <p>The respective authority resolves your issue and you can provide feedback.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} TrackItRight. All rights reserved.</p>
        <p>Made with 💙 by Aslam</p>
        <p className="footer-links">
          <a href="https://www.linkedin.com/in/aslamsayyad02/">LinkedIn</a> | <a href="https://github.com/aslams2020">GitHub</a>
        </p>
      </footer>
    </div>
  );
}
