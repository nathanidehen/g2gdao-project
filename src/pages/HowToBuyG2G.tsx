import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Users, FileText, Mail, Phone, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const HowToBuyG2G = () => {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <Navigation isVisible={true} onClose={() => {}} />
      <main className="pt-8">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">How to Buy G2G Tokens</h1>
              <p className="text-xl text-muted-foreground">
                Your step-by-step guide to purchasing G2G tokens
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold">Create Wallet</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Set up a compatible crypto wallet like MetaMask or Trust Wallet
                </p>
                <Button variant="outline" className="w-full">
                  Get MetaMask
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold">Buy ETH</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Purchase Ethereum from an exchange and transfer to your wallet
                </p>
                <Button variant="outline" className="w-full">
                  Buy on Coinbase
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold">Swap for G2G</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Use Uniswap or PancakeSwap to exchange ETH for G2G tokens
                </p>
                <Button variant="outline" className="w-full">
                  Open Uniswap
                </Button>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Important Notice</h3>
                  <p className="text-muted-foreground">
                    Always verify the official G2G token contract address before making any transactions. 
                    Never share your private keys or seed phrase with anyone.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Tips
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always use official websites and verified contract addresses</li>
                  <li>• Double-check transaction details before confirming</li>
                  <li>• Keep your wallet software updated</li>
                  <li>• Never share your private keys</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join our community for support and the latest updates
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Discord Community
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Telegram Support
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <FloatingTokenWidget />
    </div>
  );
};

export default HowToBuyG2G;