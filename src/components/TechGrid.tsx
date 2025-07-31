import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TechItem {
  id: string;
  title: string;
  excerpt: string;
  subtitle: string;
  category: string;
  status: 'infrastructure' | 'platform' | 'security';
}

const techItems: TechItem[] = [
  {
    id: 'privacy-kyc',
    title: 'PRIVACY-PRESERVING KYC',
    excerpt: 'Revolutionary privacy-first identity verification that meets global compliance standards while preserving user anonymity through advanced cryptographic protocols.',
    subtitle: 'Our Industry-Defined Revolution',
    category: 'IDENTITY',
    status: 'infrastructure'
  },
  {
    id: 'patent-plus',
    title: 'PATENT PLUS',
    excerpt: 'Comprehensive intellectual property management platform that tokenizes patents and enables decentralized innovation funding through blockchain technology.',
    subtitle: 'Proprietary Technology Platform',
    category: 'IP MANAGEMENT',
    status: 'platform'
  },
  {
    id: 'insurance-escrow',
    title: 'DIGITAL INSURANCE ESCROW',
    excerpt: 'Automated insurance protocols that provide instant compensation for digital asset losses, smart contract failures, and cyber security breaches.',
    subtitle: 'Digital Loss Compensation',
    category: 'INSURANCE',
    status: 'security'
  },
  {
    id: 'nft-platform',
    title: 'SELF-SOVEREIGN NFT PLATFORM',
    excerpt: 'Decentralized NFT ecosystem that gives creators and collectors true ownership and control over their digital assets without platform dependencies.',
    subtitle: 'True Ownership',
    category: 'NFT ECOSYSTEM',
    status: 'platform'
  },
  {
    id: 'grade-research',
    title: 'G-RADE™ RESEARCH',
    excerpt: 'Cutting-edge research platform that combines AI, machine learning, and blockchain analytics to provide actionable intelligence for Web3 ecosystems.',
    subtitle: 'Advanced Analytics and Intelligence Platform',
    category: 'ANALYTICS',
    status: 'infrastructure'
  },
  {
    id: 'investor-dashboard',
    title: 'INVESTOR DASHBOARD',
    excerpt: 'Comprehensive investment management platform providing real-time portfolio tracking, risk assessment, and automated rebalancing for digital assets.',
    subtitle: 'Portfolio Management Excellence',
    category: 'INVESTMENT',
    status: 'platform'
  }
];

const getStatusBadge = (status: TechItem['status']) => {
  switch (status) {
    case 'infrastructure':
      return <Badge variant="destructive" className="font-mono">INFRA</Badge>;
    case 'platform':
      return <Badge className="bg-primary text-primary-foreground font-mono">PLATFORM</Badge>;
    case 'security':
      return <Badge variant="secondary" className="font-mono">SECURITY</Badge>;
    default:
      return null;
  }
};

interface TechGridProps {
  onCardClick: (cardId: string) => void;
}

const TechGrid = ({ onCardClick }: TechGridProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6 tracking-tighter">
            REVOLUTIONARY <span className="text-primary">PRODUCTS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Experience the future of digital innovation with our cutting-edge product ecosystem
          </p>
        </div>

        {/* Full-width stacked cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {techItems.map((item) => (
            <Card 
              key={item.id} 
              className="border-2 hover:border-primary transition-colors group cursor-pointer w-full"
              onClick={() => onCardClick(item.id)}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusBadge(item.status)}
                      <span className="article-meta text-xs">{item.category}</span>
                    </div>
                    <h3 className="rekt-title text-2xl mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="article-meta text-sm text-primary mb-4">{item.subtitle}</p>
                    <p className="terminal-text text-base text-muted-foreground leading-relaxed mb-6 max-w-4xl">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" className="font-mono text-sm p-0 h-auto hover:text-primary">
                  READ MORE →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;