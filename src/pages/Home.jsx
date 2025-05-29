import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer building responsive web apps.</p>
        <a href="/contact" className="btn btn-primary">Hire Me</a>
      </div>
    </div>
  );
}

export default Home;