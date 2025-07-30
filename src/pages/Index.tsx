import { useState } from 'react';
import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import NewsGrid from '@/components/NewsGrid';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';

const Index = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleCardClick = () => {
    setIsMenuVisible(true);
  };

  const handleMenuClose = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <Navigation isVisible={isMenuVisible} onClose={handleMenuClose} />
      <main>
        <HeroSection />
        <NewsGrid onCardClick={handleCardClick} />
      </main>
      <FloatingTokenWidget />
    </div>
  );
};

export default Index;
