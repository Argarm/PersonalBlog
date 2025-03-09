import React from 'react';
import avatar from './assets/avatar.jpeg';
import './App.css';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">Work</a>
          <a href="#">Blog</a>
        </div>
      </nav>

      <div className="profile-wrapper">
        <div className="profile-image-section">
          <div className="profile-image">
            <img
              src={avatar}
              alt="Profile"
            />
          </div>
          <div className="profile-location">
            <p>📍 Canary Islands, Spain</p>
          </div>
          <div className="language-buttons">
            <button>English</button>
            <button>Spanish</button>
          </div>
        </div>

        <div className="profile-content">
          <h1 className="profile-name">Aarón García</h1>
          <p className="profile-title">Software Engineer</p>

          <div className="social-buttons">
            <button className="social-button">🐙 GitHub</button>
            <button className="social-button">💼 LinkedIn</button>
            <button className="social-button">✉️ Email</button>
          </div>
        </div>
      </div>
      <p className="profile-description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit eget, varius bibendum risus pharetra sollicitudin suscipit himenaeos, fermentum mi dictumst feugiat rutrum felis cubilia. Nostra convallis mattis nascetur cum pretium montes ridiculus duis tellus, mauris congue gravida curae nullam sociis quisque augue taciti, sociosqu magna fames netus non blandit feugiat aliquam. Suspendisse metus in dapibus ut nam augue potenti fames fusce, aenean bibendum sodales magna commodo egestas tempor eget suscipit taciti, curae iaculis mattis pretium pellentesque luctus pharetra tempus.
      </p>

    </div>
  );
}