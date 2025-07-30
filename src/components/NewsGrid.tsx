import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  amount: string;
  category: string;
  date: string;
  status: 'rekt' | 'research' | 'defi';
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'CURVE FINANCE - REKT',
    excerpt: '$62M drained from Curve pools via vyper compiler exploit. Multiple stable pools affected including alETH, msETH, and pETH. Front-runners extracted additional value during the chaos.',
    amount: '$62M',
    category: 'EXPLOIT',
    date: 'FRIDAY, JULY 30, 2025',
    status: 'rekt'
  },
  {
    id: '2',
    title: 'LONGEVITY RESEARCH - FUNDED',
    excerpt: 'Breakthrough anti-aging protocol receives $15M in DeSci funding. Novel NAD+ boosters show 40% lifespan extension in mice trials. Clinical human trials starting Q4.',
    amount: '$15M',
    category: 'RESEARCH',
    date: 'THURSDAY, JULY 29, 2025',
    status: 'research'
  },
  {
    id: '3',
    title: 'MULTICHAIN BRIDGE - REKT',
    excerpt: 'Anyswap router exploited for $130M across 6 chains. Attacker manipulated validation signatures through compromised MPC nodes. Funds bridged to Tornado Cash.',
    amount: '$130M',
    category: 'BRIDGE',
    date: 'WEDNESDAY, JULY 28, 2025',
    status: 'rekt'
  },
  {
    id: '4',
    title: 'QUANTUM COMPUTING - DEFI',
    excerpt: 'Post-quantum cryptography implementation launches on Ethereum. New zk-STARKs resist quantum attacks while maintaining DeFi composability. IBM partnership confirmed.',
    amount: '$8.5M',
    category: 'INNOVATION',
    date: 'TUESDAY, JULY 27, 2025',
    status: 'defi'
  },
  {
    id: '5',
    title: 'EULER FINANCE - REKT II',
    excerpt: 'Second exploit hits Euler for $28M via flash loan manipulation. Donation attack on isolated pools triggers liquidation cascade. Team promises compensation.',
    amount: '$28M',
    category: 'EXPLOIT',
    date: 'MONDAY, JULY 26, 2025',
    status: 'rekt'
  },
  {
    id: '6',
    title: 'BIOTECH PATENTS - TOKENIZED',
    excerpt: 'Revolutionary cancer immunotherapy patents tokenized as IP-NFTs. $45M raised for Phase II trials. First successful example of pharma IP on blockchain.',
    amount: '$45M',
    category: 'RESEARCH',
    date: 'SUNDAY, JULY 25, 2025',
    status: 'research'
  }
];

const getStatusBadge = (status: NewsItem['status']) => {
  switch (status) {
    case 'rekt':
      return <Badge variant="destructive" className="font-mono">REKT</Badge>;
    case 'research':
      return <Badge className="bg-primary text-primary-foreground font-mono">RESEARCH</Badge>;
    case 'defi':
      return <Badge variant="secondary" className="font-mono">DEFI</Badge>;
    default:
      return null;
  }
};

const NewsGrid = () => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold font-mono tracking-tight">LATEST INTEL</h2>
          <Button variant="outline" className="font-mono">VIEW ALL</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="border-2 hover:border-primary transition-colors group cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {getStatusBadge(item.status)}
                  <span className="article-meta">{item.amount}</span>
                </div>
                <p className="article-meta text-xs">{item.date}</p>
                <p className="article-meta text-xs">{item.category}</p>
              </CardHeader>
              <CardContent>
                <h3 className="rekt-title text-lg mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="terminal-text text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="font-mono text-xs p-0 h-auto hover:text-primary">
                  MORE →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;