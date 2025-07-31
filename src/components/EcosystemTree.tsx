import React from 'react';
import { Card } from '@/components/ui/card';

interface Company {
  name: string;
  description: string;
}

const companies: Company[] = [
  { name: 'GO2GLORY.COM', description: 'MY GATE' },
  { name: 'SELF SOVEREIGN NFT', description: 'OPEN SOURCE' },
  { name: 'WHYKYC.COM', description: 'FREE - BETA' },
  { name: 'G2GDAO.COM', description: 'DAO PLATFORM' },
  { name: 'WHITEPAPERS', description: 'DOCUMENTATION' },
  { name: 'SECURETHY.COM', description: 'SECURITY PLATFORM' }
];

const EcosystemTree = () => {
  return (
    <div className="min-h-screen bg-background p-8 pt-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="rekt-title text-5xl mb-4 text-primary animate-fade-in">G-RADE ECOSYSTEM</h1>
          <p className="article-meta text-muted-foreground">DECENTRALIZED NETWORK</p>
        </div>

        <div className="flex flex-col items-center">
          {/* Root Node */}
          <div className="animate-scale-in mb-0">
            <Card className="p-6 border-2 border-primary bg-card transition-all duration-300 shadow-lg">
              <div className="text-center">
                <h2 className="font-mono font-bold text-xl text-primary mb-1">G-RADE.ORG</h2>
                <p className="article-meta text-muted-foreground text-sm">ROOT PROTOCOL</p>
              </div>
            </Card>
          </div>

          {/* Tree Structure */}
          <div className="relative flex flex-col items-center">
            {/* Vertical line from root */}
            <div className="w-0.5 h-16 bg-primary"></div>
            
            {/* Horizontal main branch */}
            <div className="relative">
              <div className="w-[800px] h-0.5 bg-primary"></div>
              
              {/* Vertical lines to child nodes */}
              <div className="absolute top-0 w-full flex justify-between px-8">
                {companies.map((_, index) => (
                  <div key={index} className="relative flex justify-center">
                    <div className="w-0.5 h-16 bg-primary"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Nodes */}
            <div className="w-[800px] flex justify-between px-8 mt-0">
              {companies.map((company, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Card className="p-3 border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group w-[120px]">
                    <div className="text-center">
                      <h3 className="font-mono font-semibold text-xs mb-1 group-hover:text-primary transition-colors leading-tight">
                        {company.name}
                      </h3>
                      <p className="article-meta text-xs text-muted-foreground">
                        {company.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center p-6 border border-border rounded-lg hover:border-primary transition-colors hover-scale">
            <div className="font-mono font-bold text-3xl text-primary mb-2">6</div>
            <div className="article-meta text-muted-foreground">COMPANIES</div>
          </div>
          <div className="text-center p-6 border border-border rounded-lg hover:border-accent transition-colors hover-scale">
            <div className="font-mono font-bold text-3xl text-accent mb-2">∞</div>
            <div className="article-meta text-muted-foreground">CONNECTIONS</div>
          </div>
          <div className="text-center p-6 border border-border rounded-lg hover:border-primary transition-colors hover-scale">
            <div className="font-mono font-bold text-3xl text-primary mb-2">1</div>
            <div className="article-meta text-muted-foreground">ECOSYSTEM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemTree;