import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Banner from '../Banner';
import Steps from '../Steps';
import Features from '../Features';
import CTA from '../CTA';
import Footer from '../Footer';

function Main() {
  return (
    <div className="bueena-landing">
      <Header />
      <Hero />
      <Banner />
      <Steps />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default Main;
