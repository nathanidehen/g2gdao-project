import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import NewsGrid from '@/components/NewsGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <NewsGrid />
      </main>
    </div>
  );
};

export default Index;
