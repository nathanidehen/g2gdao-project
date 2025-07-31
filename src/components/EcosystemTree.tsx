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
          <div className="animate-scale-in mb-8">
            <Card className="p-8 border-2 border-primary bg-card hover:bg-accent/10 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-center">
                <h2 className="font-mono font-bold text-2xl text-primary mb-2">G-RADE.ORG</h2>
                <p className="article-meta text-muted-foreground">ROOT PROTOCOL</p>
              </div>
            </Card>
          </div>

          {/* Line Art Tree Structure */}
          <div className="relative w-full max-w-5xl mb-8">
            {/* Main trunk */}
            <div className="w-0.5 h-20 bg-primary mx-auto animate-fade-in"></div>
            
            {/* Horizontal main branch */}
            <div className="relative">
              <div className="w-96 h-0.5 bg-primary mx-auto"></div>
              
              {/* Vertical branches to nodes */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 flex justify-between">
                {companies.map((_, index) => (
                  <div key={index} className="relative">
                    <div 
                      className="w-0.5 h-16 bg-primary animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Nodes in Line Art Tree Layout */}
          <div className="w-full max-w-5xl">
            <div className="flex justify-between items-start gap-4">
              {companies.map((company, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover-scale flex-1"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Card className="p-3 border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
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