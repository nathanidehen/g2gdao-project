import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Users, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold font-mono mb-6 tracking-tighter">
          JOIN THE INTERNET INFRASTRUCTURE REVOLUTION
        </h1>
        <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-8 max-w-2xl mx-auto">
          JOIN THE INTERNET INFRASTRUCTURE REVOLUTION
          <br />Track exploits, fund research, build the future.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="font-mono text-lg px-8">
            EXPLORE HACKS
          </Button>
          <Button variant="outline" size="lg" className="font-mono text-lg px-8">
            FUND RESEARCH
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-6 h-6 text-primary mr-2" />
              <span className="text-3xl font-bold font-mono">$2.3B</span>
            </div>
            <p className="article-meta">TOTAL REKT</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="w-6 h-6 text-destructive mr-2" />
              <span className="text-3xl font-bold font-mono">847</span>
            </div>
            <p className="article-meta">EXPLOITS TRACKED</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-primary mr-2" />
              <span className="text-3xl font-bold font-mono">156</span>
            </div>
            <p className="article-meta">RESEARCH PROJECTS</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-accent mr-2" />
              <span className="text-3xl font-bold font-mono">45K</span>
            </div>
            <p className="article-meta">COMMUNITY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;