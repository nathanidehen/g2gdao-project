import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
          JOIN THE INTERNET<br />INFRASTRUCTURE REVOLUTION
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary whitespace-nowrap">
            The Future of Digital Identity, Privacy & Value Creation is HERE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From Patent-Protected Technology to Digital Insurance Escrow - <br />We're Building the infrastructure for Web3's Next Evolution
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button size="lg" className="font-mono text-lg px-8">
            INVEST NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;