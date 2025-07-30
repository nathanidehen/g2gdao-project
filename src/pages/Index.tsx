import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import NewsGrid from '@/components/NewsGrid';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const selectedCard = searchParams.get('card');

  useEffect(() => {
    if (selectedCard) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  }, [selectedCard]);

  const handleCardClick = (cardId: string) => {
    setSearchParams({ card: cardId });
  };

  const handleMenuClose = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <div className="fixed top-2 right-2 z-[60]">
        <ThemeToggle />
      </div>
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
