import React from 'react';

import LogosTechnologies from './LogosTechnologies';

const Banner = () => (
  <div className="banner">
    <div className="banner__bounds">
      <div className="banner__column">
        <div className="banner__content">
          <h1 className="banner__title headline-2">Build State of the Art Applications</h1>
          <p className="banner_description lead-1">
            Have your project work with the latest technologies. Complete product development and engineering service from scratchwith maintanable and scalable stacks. 
          </p>
        </div>
      </div>
      <div className="banner__column">
        <LogosTechnologies />
      </div>
    </div>
  </div>
);

export default Banner;
