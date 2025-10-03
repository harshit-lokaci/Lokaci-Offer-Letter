import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/about/Hero';
import ValuesSection from '../components/about/Values';
import CTASection from '../components/Home/CTA';

const AboutPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ValuesSection />
      <CTASection/>
      <Footer />
    </>
  );
};

export default AboutPage;
