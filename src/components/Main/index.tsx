import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Banner from '../Banner';
import Steps from '../Steps';
import Services from '../Services';
import CTA from '../CTA';
import Footer from '../Footer';

function Main() {
  return (
    <div className="bueena-landing">
      <Header />
      <Hero />
      <Banner />
      <Steps />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default Main;
