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
  { name: 'G2G INVESTOR', description: 'G2G DASHBOARD' },
  { name: 'SECURETHY.COM', description: 'SECURITY PLATFORM' },
  { name: 'G-RADE.ORG', description: 'MAIN PLATFORM' }
];

const EcosystemTree = () => {
  return (
    <div className="min-h-screen bg-background p-8 pt-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="rekt-title text-5xl mb-4 text-primary animate-fade-in">G-RADE ECOSYSTEM</h1>
          <p className="article-meta text-muted-foreground">DECENTRALIZED NETWORK</p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          {/* Root Node */}
          <div className="animate-scale-in">
            <Card className="p-8 border-2 border-primary bg-card hover:bg-accent/10 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-center">
                <h2 className="font-mono font-bold text-2xl text-primary mb-2">G-RADE</h2>
                <p className="article-meta text-muted-foreground">ROOT PROTOCOL</p>
              </div>
            </Card>
          </div>

          {/* Dynamic Tree Connections */}
          <div className="relative w-full max-w-4xl">
            {/* Main trunk */}
            <div className="w-1 h-16 bg-gradient-to-b from-primary to-accent mx-auto animate-fade-in"></div>
            
            {/* Branching lines */}
            <div className="relative">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute top-0 left-0 w-full grid grid-cols-4 gap-0">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="relative">
                    <div 
                      className="w-1 h-12 bg-accent mx-auto animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Nodes in Tree Layout */}
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companies.map((company, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in hover-scale"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Card className="p-4 border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                    <div className="text-center">
                      <h3 className="font-mono font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
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
            <div className="font-mono font-bold text-3xl text-primary mb-2">8</div>
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