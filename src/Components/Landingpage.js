import React from 'react';
import ParticleBackground from './ParticleBackground';
import './LandingPage.css';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <ParticleBackground />
      <div className="content">
        <h1 className="typewriter-text">See Beyond with AI</h1>
        <div className="buttons">
        
        <Link to='/Signup'>
        <button className="btn sign-in">Sign In</button>
        </Link>
        <Link to='/Login'>   <button className="btn login">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
