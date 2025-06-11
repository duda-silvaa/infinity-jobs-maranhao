
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import MainServices from '../components/MainServices';
import RegionalImpact from '../components/RegionalImpact';
import ProfileShowcase from '../components/ProfileShowcase';
import SocialFeed from '../components/SocialFeed';
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
        <MainServices />
        <RegionalImpact />
        <ProfileShowcase />
        <SocialFeed />
        <GamificationSection />
        <UserAreas />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
