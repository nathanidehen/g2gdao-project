import MolecularBackground from '@/components/MolecularBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import NewsGrid from '@/components/NewsGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MolecularBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <NewsGrid />
      </main>
    </div>
  );
};

export default Index;
