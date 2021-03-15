import React from 'react';
import Button from '../Button';

const Hero = () => (
  <div className="hero">
    <div className="hero__bounds">
      <h1 className="hero__title headline-1">Bring your dream business to life, simple and fast</h1>
      <div className="hero__action">
        <Button href="#">Get Started</Button>
      </div>
    </div>
    <div className="hero__ellipse"></div>
    <img src="/assets/hero/iphone-x.png" alt="Iphone X" className="hero__asset"/>
  </div>
);

export default Hero;
