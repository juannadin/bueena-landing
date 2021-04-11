import React from 'react';
import Button from '../Button';
import Feature from './Feature';

const Features = () => (
  <div className="features">
    <div className="features__bounds">
      <h2 className="features__title headline-2">Features that connect you to your users</h2>
      <ul className="features-list">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </ul>
      <Button className="features__link" href="#" flavor="outline" size="large" icon="right-arrow">Explore All</Button>
    </div>
  </div>
);

export default Features;
