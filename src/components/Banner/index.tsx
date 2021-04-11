import React from 'react';

import LogosTechnologies from './LogosTechnologies';

const Banner = () => (
  <div className="banner">
    <div className="banner__bounds">
      <div className="banner__column banner__column--left">
        <div className="banner__content">
          <h1 className="banner__title headline-2">Build State of the Art Applications</h1>
          <p className="banner__description lead-1">
            Have your project work with the latest technologies. Complete product development and engineering service from scratchwith maintanable and scalable stacks. 
          </p>
        </div>
      </div>
      <div className="banner__column banner__column--right">
        <LogosTechnologies />
      </div>
    </div>
  </div>
);

export default Banner;
