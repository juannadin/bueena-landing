import React from 'react';

const LogosTechnologies = () => (
  <div className="logos-technologies">
    <div className="logos-technologies__ellipse logos-technologies__ellipse--large">
    <img className="logos-technologies__logo logos-technologies__logo--top" src="/assets/logos/react.png" alt="react" />
    <img className="logos-technologies__logo logos-technologies__logo--top-left" src="/assets/logos/typescript.png" alt="typescript" />
    <img className="logos-technologies__logo logos-technologies__logo--bottom-left" src="/assets/logos/vs_code.png" alt="vs code" />
    <img className="logos-technologies__logo logos-technologies__logo--bottom" src="/assets/logos/figma.png" alt="figma" />
    <img className="logos-technologies__logo logos-technologies__logo--bottom-right" src="/assets/logos/git.png" alt="git" />
    <img className="logos-technologies__logo logos-technologies__logo--top-right" src="/assets/logos/node_js.png" alt="Node Js" />
    </div>
    <div className="logos-technologies__ellipse logos-technologies__ellipse--medium"></div>
    <div className="logos-technologies__ellipse logos-technologies__ellipse--small">
      <img className="logos-technologies__logo logos-technologies__logo--top" src="/assets/logos/js.png" alt="javascript" />
      <img className="logos-technologies__logo logos-technologies__logo--right" src="/assets/logos/css_3.png" alt="css" />
      <img className="logos-technologies__logo logos-technologies__logo--left" src="/assets/logos/html_5.png" alt="html" />
    </div>
  </div>
);

export default LogosTechnologies;
