import React from 'react';
import { Card } from '@/components/ui/card';

interface Company {
  name: string;
  description: string;
}

const companies: Company[] = [
  { name: 'Sain Design G-T-P', description: 'DESIGN STUDIO' },
  { name: 'SecureHyrian', description: 'SECURITY PLATFORM' },
  { name: 'DrydenAI', description: 'AI SOLUTIONS' },
  { name: 'MyGoldJoy', description: 'GOLD TRADING' },
  { name: 'KryptoPress', description: 'CRYPTO NEWS' }
];

const EcosystemTree = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="rekt-title text-4xl mb-4 text-primary">G-RADE ECOSYSTEM</h1>
          <p className="article-meta text-muted-foreground">DECENTRALIZED NETWORK</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Root Node */}
          <Card className="p-6 border-2 border-primary bg-card hover:bg-accent/10 transition-colors">
            <div className="text-center">
              <h2 className="font-mono font-bold text-xl text-primary mb-2">G-RADE</h2>
              <p className="article-meta text-muted-foreground">ROOT PROTOCOL</p>
            </div>
          </Card>

          {/* Connecting Lines */}
          <div className="relative">
            <div className="w-px h-8 bg-border mx-auto"></div>
            <div className="w-64 h-px bg-border"></div>
            <div className="absolute top-8 left-0 w-full flex justify-between">
              {companies.map((_, index) => (
                <div key={index} className="w-px h-8 bg-border"></div>
              ))}
            </div>
          </div>

          {/* Company Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {companies.map((company, index) => (
              <Card 
                key={index} 
                className="p-4 border border-border bg-card hover:border-accent transition-colors cursor-pointer group"
              >
                <div className="text-center">
                  <h3 className="font-mono font-semibold text-sm mb-2 group-hover:text-accent transition-colors">
                    {company.name}
                  </h3>
                  <p className="article-meta text-xs text-muted-foreground">
                    {company.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-border rounded-lg">
            <div className="font-mono font-bold text-2xl text-primary mb-2">5</div>
            <div className="article-meta text-muted-foreground">COMPANIES</div>
          </div>
          <div className="text-center p-6 border border-border rounded-lg">
            <div className="font-mono font-bold text-2xl text-accent mb-2">∞</div>
            <div className="article-meta text-muted-foreground">CONNECTIONS</div>
          </div>
          <div className="text-center p-6 border border-border rounded-lg">
            <div className="font-mono font-bold text-2xl text-primary mb-2">1</div>
            <div className="article-meta text-muted-foreground">ECOSYSTEM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemTree;