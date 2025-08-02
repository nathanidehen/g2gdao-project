import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechGrid from '@/components/TechGrid';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const getDetailedContent = (cardId: string) => {
  const content = {
    'grade-research': {
      title: 'G-RADE™ Research Platform',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              G-RADE™ RESEARCH
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Advanced Analytics and Intelligence Platform
            </h2>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">PLATFORM OVERVIEW</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                G-RADE™ Research represents the evolution of traditional financial analysis for the Web3 era.
              </p>
            </section>
          </div>
        </div>
      )
    },
    'privacy-kyc': {
      title: 'Privacy-Preserving KYC',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              PRIVACY-PRESERVING KYC
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Our Industry-Defined Revolution
            </h2>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">REVOLUTIONARY IDENTITY VERIFICATION</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Privacy-Preserving KYC revolutionizes identity verification by combining zero-knowledge proofs with advanced cryptographic protocols.
              </p>
            </section>
          </div>
        </div>
      )
    },
    'patent-plus': {
      title: 'Patent Plus Technology',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              PATENT PLUS
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Proprietary Technology Platform
            </h2>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">INTELLECTUAL PROPERTY REVOLUTION</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Patent Plus transforms intellectual property management through blockchain tokenization and decentralized funding mechanisms.
              </p>
            </section>
          </div>
        </div>
      )
    },
    'insurance-escrow': {
      title: 'Digital Insurance Escrow',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              DIGITAL INSURANCE ESCROW
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Digital Loss Compensation
            </h2>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">AUTOMATED DIGITAL PROTECTION</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Digital Insurance Escrow provides automated, parametric insurance for the digital economy.
              </p>
            </section>
          </div>
        </div>
      )
    },
    'nft-platform': {
      title: 'Self-Sovereign NFT Platform',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              SELF-SOVEREIGN NFT PLATFORM
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              True Ownership
            </h2>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TRUE DIGITAL OWNERSHIP</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Self-Sovereign NFT Platform empowers creators and collectors with true ownership and control over digital assets.
              </p>
            </section>
          </div>
        </div>
      )
    },
    'investor-dashboard': {
      title: 'Investor Dashboard',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              INVESTOR DASHBOARD
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Portfolio Management Excellence
            </h2>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">COMPREHENSIVE PORTFOLIO MANAGEMENT</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Investor Dashboard provides institutional-grade portfolio management for digital assets.
              </p>
            </section>
          </div>
        </div>
      )
    },
  };

  return content[cardId as keyof typeof content] || null;
};

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const selectedCard = searchParams.get('card');

  useEffect(() => {
    if (selectedCard) {
      setIsMenuVisible(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsMenuVisible(false);
    }
  }, [selectedCard]);
  
  const handleCardClick = (cardId: string) => {
    if (cardId === 'ecosystem-tree') {
      navigate('/ecosystem');
    } else {
      setSearchParams({ card: cardId });
    }
  };

  const handleMenuClose = () => {
    setSearchParams({});
  };

  useEffect(() => {
    const handlePopState = () => {
      if (!selectedCard) {
        setIsMenuVisible(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedCard]);

  const detailedContent = selectedCard ? getDetailedContent(selectedCard) : null;

  return (
    <div className="min-h-screen bg-background relative">
      <Banner />
      <Navigation isVisible={isMenuVisible} onClose={handleMenuClose} />
      
      {/* Widget always visible - positioned absolutely */}
      <FloatingTokenWidget />
      
      {detailedContent ? (
        <main className="pt-20">
          {detailedContent.content}
        </main>
      ) : (
        <main className="pt-20">
          <HeroSection />
          <TechGrid onCardClick={handleCardClick} />
        </main>
      )}
    </div>
  );
};

export default Index;