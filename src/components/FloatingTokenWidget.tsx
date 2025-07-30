import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const FloatingTokenWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [priceData, setPriceData] = useState({
    current: 8.50,
    change24h: 0.00,
    volume24h: 125430,
    marketCap: 8500000
  });

  // Mock price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPriceData(prev => {
        const change = (Math.random() - 0.5) * 0.1;
        const newPrice = Math.max(0.01, prev.current + change);
        const newChange = ((newPrice - 8.50) / 8.50) * 100;
        
        return {
          ...prev,
          current: newPrice,
          change24h: newChange
        };
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-2 top-12 z-50 w-[340px] max-w-[calc(100vw-1rem)]">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">
        {/* Header */}
        <div 
          className="p-3 border-b cursor-pointer flex items-center justify-between hover:bg-muted/50 transition-colors select-none"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Widget clicked, current state:', isExpanded);
            setIsExpanded(!isExpanded);
          }}
        >
          <h3 className="font-mono font-semibold text-sm pointer-events-none">Buy G2G Tokens</h3>
          {isExpanded ? <ChevronUp className="w-4 h-4 pointer-events-none" /> : <ChevronDown className="w-4 h-4 pointer-events-none" />}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="p-3 space-y-3">
            {/* Price Ticker */}
            <div className="bg-primary/10 rounded-lg p-2 flex justify-between items-center">
              <div className="font-mono">
                <span className="text-xs text-muted-foreground">G2G: </span>
                <span className="font-semibold text-sm">${priceData.current.toFixed(4)}</span>
              </div>
              <div className={`text-xs px-2 py-1 rounded ${
                priceData.change24h >= 0 ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
              }`}>
                {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h.toFixed(2)}%
              </div>
            </div>

            {/* Token Info */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contract:</span>
                <span className="font-mono">0x44f4...72fa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network:</span>
                <span>Ethereum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">24h Volume:</span>
                <span>${priceData.volume24h.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Market Cap:</span>
                <span>${(priceData.marketCap / 1000000).toFixed(1)}M</span>
              </div>
            </div>

            {/* Widget Iframe */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <iframe 
                src="https://app.uniswap.org/#/swap?theme=light&tokenList=default&defaultInputToken=NATIVE&defaultOutputToken=0x44f4c19c1229e9c4143efb3c7dab382d10df72fa&defaultInputAmount=1"
                width="100%"
                height="320"
                className="border-none"
                title="Uniswap Widget"
              />
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded text-center">
              <strong>⚠️ Important:</strong> This widget connects directly to Uniswap. 
              Always verify the token contract address.
            </div>

            {/* CTA */}
            <div className="bg-primary/5 p-2 rounded-lg">
              <div className="font-semibold text-xs mb-1">🚀 Join the Patent Revolution</div>
              <div className="text-xs text-muted-foreground">
                G2G tokens give you governance rights and revenue sharing in our patent licensing DAO.
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default FloatingTokenWidget;