import React from 'react'
import Image from 'next/image'
import hero from '@/Hero.png'


function Hero() {
  return (
    <div id='Home' className="hero-container">
      {/* Background Gradient Circle */}
      <div className="background-circle"></div>
      
      <div className="hero-content">
        {/* Main Text */}
        <div className="hero-text">
          <h1 className="hero-main-text">Hi, I am</h1>
          <h1 className="hero-name">Muhammad Anas</h1>
          
          {/* Description */}
          <p className="hero-description">
            I am a full stack web developer
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="hero-image-container">
          <Image
            src={hero}
            alt="Hero Image"
            width={800}
            height={200}
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
