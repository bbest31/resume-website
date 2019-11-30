import React from 'react';
import './App.css';
import HeaderSection from './HeaderSection/HeaderSection';
import AboutSection from './AboutSection/AboutSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import FooterSection from './FooterSection/FooterSection';

function App() {
  return (
    <div className="App main-bg">
        <HeaderSection />
        <AboutSection />
        <PortfolioSection />
        <FooterSection />
    </div>
  );
}

export default App;
