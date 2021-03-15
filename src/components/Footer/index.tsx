import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import SocialLinks from '../SocialLinks';

const Footer = () => (
  <footer className="footer">
  <div className="footer__bounds">
    <div className="footer__section footer__section--centered">
      <Logo theme="light" />
      <Navigation theme="light" />
    </div>
    <hr className="footer__divider"/>
    <div className="footer__section footer__section--space-between">
    <p className="footer__legal body-2">© 2021 Bueena. All rights reserved</p>
    <SocialLinks />
    </div>
  </div>
</footer>
);

export default Footer;
