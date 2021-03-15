import React, { FC } from 'react';

type StepsProps = {
 title: string;
 description: string;
 asset: string;
}

const Step: FC<StepsProps> = ({ title, description, asset }) =>{
  return (
    <div className="step">
      <img className="step__icon" src={asset} alt="step 1"/>
      <div className="step__detail">
        <h3 className="step__title subtitle-1">{title}</h3>
        <p className="step__description body-1">{description}</p>
      </div>
    </div>
  );
}

export default Step;
