
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import RegionalImpact from '../components/RegionalImpact';
import ProfileShowcase from '../components/ProfileShowcase';
import GamificationSection from '../components/GamificationSection';
import UserAreas from '../components/UserAreas';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <RegionalImpact />
        <ProfileShowcase />
        <GamificationSection />
        <UserAreas />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
