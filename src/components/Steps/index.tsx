import React from 'react';

import Step from './Step';

const Steps = () => {
  return (
    <div className="steps">
      <div className="steps__bounds">
        <h2 className="steps__title headline-2">Our approach to reach your business goals</h2>
        <div className="steps-container">
          <Step
            title="Ideate"
            description="Turn your idea from concept to MVP"
            asset="/assets/steps/step_1.png"
          />
          <Step
            title="Design"
            description="Sketch out the product to align the user needs"
            asset="/assets/steps/step_2.png"
          />
          <Step
            title="Develop"
            description="Convert the designs into a live application"
            asset="/assets/steps/step_3.png"
          />
          <Step
            title="Deploy"
            description="Launching the application to the market"
            asset="/assets/steps/step_4.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
