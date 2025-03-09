import React from 'react';
import './App.css';
import avatar from './assets/avatar.jpeg';
function App() {
  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Blog</a>
          <a href="#">Gallery</a>
        </div>
      </nav>

      <div className="profile-section">
        <div className="profile-image">
          <img
            src={avatar}
            alt="Profile"
          />
        </div>
        <h1 className="profile-name">Aarón Garcia</h1>
        <p className="profile-title">Software Engineer</p>


        <p className="profile-description">
        Lorem ipsum dolor sit amet consectetur adipiscing elit eget, varius bibendum risus pharetra sollicitudin suscipit himenaeos, fermentum mi dictumst feugiat rutrum felis cubilia. Nostra convallis mattis nascetur cum pretium montes ridiculus duis tellus, mauris congue gravida curae nullam sociis quisque augue taciti, sociosqu magna fames netus non blandit feugiat aliquam. Suspendisse metus in dapibus ut nam augue potenti fames fusce, aenean bibendum sodales magna commodo egestas tempor eget suscipit taciti, curae iaculis mattis pretium pellentesque luctus pharetra tempus.
        </p>
      </div>
    </div>
  );
}
export default App
