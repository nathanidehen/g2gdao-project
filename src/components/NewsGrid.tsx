import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// 1. UPDATE YOUR INTERFACE - Add optional detailedContent property
interface TechItem {
  id: string;
  title: string;
  excerpt: string;
  subtitle: string;
  category: string;
  status: 'infrastructure' | 'platform' | 'security';
  detailedContent?: {
    overview: string;
    keyFeatures: string[];
    assessmentCategories: Array<{
      name: string;
      description: string;
      weight: number;
      currentScore: number;
      metrics: string[];
    }>;
    benefits: string[];
    technicalSpecs: string[];
    impactMetrics: Array<{
      label: string;
      value: string;
      change: string;
      description: string;
    }>;
    useCases: Array<{
      title: string;
      description: string;
    }>;
  };
}

// 2. UPDATE YOUR ARRAY - Add the detailed content to the G-RADE item
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
    // 3. THIS IS WHERE YOU ADD THE DETAILED CONTENT - Replace your existing G-RADE item with this:
    id: 'grade-research',
    title: 'G-RADE™ RESEARCH',
    excerpt: 'Advanced institutional-grade research platform that transforms Web3 intelligence through comprehensive assessment frameworks, predictive analytics, and real-time risk evaluation for professional investment decisions.',
    subtitle: 'Advanced Analytics and Intelligence Platform',
    category: 'ANALYTICS',
    status: 'infrastructure',
    // ADD THIS DETAILED CONTENT PROPERTY:
    detailedContent: {
      overview: `G-RADE™ Research represents the evolution of traditional financial analysis for the Web3 era. Our platform combines institutional-grade research methodologies with cutting-edge blockchain analytics to provide comprehensive project assessment and risk evaluation frameworks.

The platform serves as the foundation for informed decision-making in the digital asset space, offering multi-dimensional analysis that goes beyond simple price metrics to evaluate fundamental project health, team competency, technical innovation, and market positioning.`,

      keyFeatures: [
        'Multi-dimensional project assessment framework with 6 core evaluation categories',
        'Real-time risk scoring and continuous monitoring systems',
        'AI-powered predictive analytics using machine learning models',
        'Institutional-grade research reports with actionable insights',
        'Automated compliance screening and regulatory due diligence',
        'Cross-chain portfolio analysis covering 15+ blockchain networks',
        'Custom alert systems with sub-second notification delivery',
        'Professional research team integration and white-label solutions',
        'Advanced tokenomics modeling and sustainability analysis',
        'Community sentiment analysis and social media monitoring'
      ],

      assessmentCategories: [
        {
          name: 'Technical Foundation',
          description: 'Comprehensive evaluation of code quality, architecture design, security audit results, technical innovation, and development activity. Includes smart contract analysis, GitHub activity monitoring, and peer review assessments.',
          weight: 25,
          currentScore: 87,
          metrics: ['Code Quality Score', 'Security Audit Results', 'Development Activity', 'Technical Innovation Index']
        },
        {
          name: 'Team & Leadership', 
          description: 'In-depth analysis of team experience, track record, transparency levels, governance structure, and leadership capabilities. Evaluates previous project success rates and team composition.',
          weight: 20,
          currentScore: 92,
          metrics: ['Experience Rating', 'Track Record', 'Transparency Score', 'Governance Quality']
        },
        {
          name: 'Market Position',
          description: 'Strategic analysis of competitive advantage, total addressable market size, adoption potential, partnership quality, and market timing. Includes competitive landscape mapping.',
          weight: 20,
          currentScore: 78,
          metrics: ['Market Size', 'Competitive Advantage', 'Partnership Quality', 'Adoption Metrics']
        },
        {
          name: 'Tokenomics Structure',
          description: 'Detailed evaluation of token utility, distribution mechanisms, vesting schedules, economic sustainability, and incentive alignment. Includes inflation/deflation modeling.',
          weight: 15,
          currentScore: 84,
          metrics: ['Utility Score', 'Distribution Quality', 'Vesting Structure', 'Economic Sustainability']
        },
        {
          name: 'Community & Adoption',
          description: 'Analysis of user base growth patterns, community engagement levels, ecosystem development progress, and organic adoption indicators.',
          weight: 10,
          currentScore: 89,
          metrics: ['User Growth', 'Community Engagement', 'Ecosystem Development', 'Organic Adoption']
        },
        {
          name: 'Risk Assessment',
          description: 'Comprehensive risk evaluation including regulatory compliance status, security vulnerabilities, operational risks, and potential threat vectors.',
          weight: 10,
          currentScore: 81,
          metrics: ['Regulatory Risk', 'Security Score', 'Operational Risk', 'Market Risk']
        }
      ],

      benefits: [
        'Reduce investment research time by up to 80% through automated analysis',
        'Access institutional-quality research previously available only to large funds',
        'Make data-driven investment decisions with confidence and transparency',
        'Monitor portfolio risk exposure in real-time across multiple protocols',
        'Stay ahead of market trends with predictive analytics and early warning systems',
        'Ensure regulatory compliance with automated screening and reporting',
        'Integrate seamlessly with existing investment workflows and platforms',
        'Benchmark projects against industry standards and peer comparisons',
        'Access professional research team insights and custom analysis requests',
        'Optimize portfolio allocation based on comprehensive risk-return profiles'
      ],

      technicalSpecs: [
        'Multi-chain data aggregation across 15+ blockchain networks',
        'Real-time processing capacity: 1M+ transactions per day',
        'AI/ML models trained on 5+ years of comprehensive market data',
        'Sub-second alert delivery system with 99.9% reliability',
        'Enterprise-grade security with end-to-end encryption',
        'RESTful API integration with major trading and portfolio platforms',
        '99.9% uptime SLA with redundant infrastructure deployment',
        'Custom research dashboard builder with white-label options',
        'Historical data retention: 7+ years of market and project data',
        'Advanced risk modeling with Monte Carlo simulations'
      ],

      impactMetrics: [
        {
          label: 'Research Reports Generated',
          value: '2,847',
          change: '+34% QoQ',
          description: 'Comprehensive project analysis reports delivered to clients'
        },
        {
          label: 'Projects Analyzed',
          value: '1,200+',
          change: '+156% YoY',
          description: 'Web3 projects evaluated using G-RADE methodology'
        },
        {
          label: 'Risk Alerts Delivered',
          value: '15,423',
          change: '+89% QoQ',
          description: 'Real-time risk notifications sent to subscribers'
        },
        {
          label: 'Client Success Rate',
          value: '94.2%',
          change: '+12.3% YoY',
          description: 'Percentage of clients achieving positive ROI using our research'
        },
        {
          label: 'Average Research Accuracy',
          value: '91.7%',
          change: '+5.2% YoY',
          description: 'Accuracy rate of our project assessments and predictions'
        },
        {
          label: 'Platform Uptime',
          value: '99.96%',
          change: '+0.1% QoQ',
          description: 'System availability and reliability performance'
        }
      ],

      useCases: [
        {
          title: 'Institutional Investment Due Diligence',
          description: 'Comprehensive project evaluation for institutional investors requiring detailed risk assessment and regulatory compliance documentation.'
        },
        {
          title: 'Portfolio Risk Management',
          description: 'Real-time monitoring of portfolio exposure across multiple projects with automated rebalancing recommendations.'
        },
        {
          title: 'Regulatory Compliance Screening',
          description: 'Automated compliance checking against multiple jurisdictional requirements for institutional and retail investors.'
        },
        {
          title: 'Market Intelligence and Trend Analysis',
          description: 'Predictive analytics and trend identification for strategic investment planning and market timing decisions.'
        }
      ]
    }
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
                  {item.id === 'grade-research' ? 'VIEW DETAILED ANALYSIS' : 'READ MORE'} →
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