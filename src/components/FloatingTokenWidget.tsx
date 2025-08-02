import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const FloatingTokenWidget = () => {
  console.log('FloatingTokenWidget rendering');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed left-4 top-14 z-[9999] transition-all duration-300 ${
      isExpanded ? 'w-[200px] sm:w-80' : 'w-16'
    } max-w-[calc(85vw-1rem)]`}>
      <Card className="bg-background border-border overflow-hidden">
        {!isExpanded ? (
          // Collapsed state
          <div 
            className="p-2 cursor-pointer hover:bg-muted transition-colors"
            onClick={() => setIsExpanded(true)}
          >
            <div className="text-xs font-bold text-center">Buy G2G Tokens</div>
          </div>
        ) : (
          // Expanded state - responsive design
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-2 sm:p-3 border-b border-border sticky top-0 bg-background z-10">
              <h3 className="text-xs sm:text-sm font-bold">Buy G2G Tokens</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Mobile: Compact design with proper formatting */}
            <div className="sm:hidden max-h-[calc(100vh-140px)] overflow-y-auto">
              <div className="p-3 space-y-3">
                {/* Price Section */}
                <div className="space-y-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">$1.50</div>
                    <div className="text-sm text-green-400">+5.2% (24h)</div>
                    <div className="text-xs text-foreground/70">ETH: 0.000423</div>
                  </div>
                </div>

                {/* Market Stats */}
                <div className="border-t border-border pt-3">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Market Stats</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-foreground/80">Volume</div>
                      <div className="font-medium text-foreground">$125,430</div>
                    </div>
                    <div>
                      <div className="text-foreground/80">Market Cap</div>
                      <div className="font-medium text-foreground">$15.2M</div>
                    </div>
                    <div>
                      <div className="text-foreground/80">Supply</div>
                      <div className="font-medium text-foreground">10.1M G2G</div>
                    </div>
                    <div>
                      <div className="text-foreground/80">Holders</div>
                      <div className="font-medium text-foreground">2,847</div>
                    </div>
                  </div>
                </div>

                {/* Token Info */}
                <div className="border-t border-border pt-3">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Token Info</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-foreground/80">Network:</span>
                      <span className="text-foreground">Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/80">Type:</span>
                      <span className="text-foreground">ERC-20</span>
                    </div>
                    <div>
                      <div className="text-foreground/80 mb-1">Contract:</div>
                      <div className="bg-muted p-2 rounded text-xs font-mono break-all text-foreground">
                        0x742d35Cc6634C0532925a3b8D400ABAA1C2B8C8A
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trading Pairs */}
                <div className="border-t border-border pt-3">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Trading Pairs</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-foreground">G2G/USDT</span>
                      <span className="text-green-400 font-medium">$1.498</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">G2G/ETH</span>
                      <span className="text-green-400 font-medium">0.000423</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">G2G/WBTC</span>
                      <span className="text-green-400 font-medium">0.0000187</span>
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <div className="border-t border-border pt-3">
                  <Button 
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2"
                    onClick={() => window.open('https://app.uniswap.org', '_blank')}
                  >
                    Buy on Uniswap
                  </Button>
                </div>

                {/* Recent Activity */}
                <div className="border-t border-border pt-3">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Recent Activity</h4>
                  <div className="space-y-1 text-xs max-h-20 overflow-y-auto">
                    <div className="flex justify-between">
                      <span className="text-green-400">Buy 1,250 G2G</span>
                      <span className="text-foreground/70">2m ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">Sell 890 G2G</span>
                      <span className="text-foreground/70">5m ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-400">Buy 3,200 G2G</span>
                      <span className="text-foreground/70">12m ago</span>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="border-t border-border pt-3">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Links</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-2 rounded text-center text-foreground">
                      Website
                    </button>
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-2 rounded text-center text-foreground">
                      Telegram
                    </button>
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-2 rounded text-center text-foreground">
                      Twitter
                    </button>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-border pt-3 text-xs text-foreground/70 text-center">
                  <p className="leading-relaxed">
                    ⚠️ High risk investment. Only invest what you can afford to lose. Not financial advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Full design with scrolling */}
            <div className="hidden sm:block max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="p-3 space-y-3">
                {/* Current Price */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/80">G2G Price</span>
                    <span className="text-lg font-bold text-green-400">$1.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-foreground/80">USD</span>
                    <span className="text-xs text-green-400">+5.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-foreground/80">ETH</span>
                    <span className="text-xs text-foreground">0.000423</span>
                  </div>
                </div>

                {/* Market Stats */}
                <div className="space-y-2 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground">Market Stats</h4>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">24h Volume</span>
                    <span className="text-xs text-foreground">$125,430</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">Market Cap</span>
                    <span className="text-xs text-foreground">$15.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">Circulating Supply</span>
                    <span className="text-xs text-foreground">10.1M G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">Total Supply</span>
                    <span className="text-xs text-foreground">21M G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">Holders</span>
                    <span className="text-xs text-foreground">2,847</span>
                  </div>
                </div>

                {/* Token Info */}
                <div className="space-y-2 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground">Token Details</h4>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">Network</span>
                    <span className="text-xs text-foreground">Ethereum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-foreground/80">Standard</span>
                    <span className="text-xs text-foreground">ERC-20</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-foreground/80">Contract Address</span>
                    <div className="bg-muted p-2 rounded text-xs font-mono break-all text-foreground">
                      0x742d35Cc6634C0532925a3b8D400ABAA1C2B8C8A
                    </div>
                    <button className="text-xs text-blue-400 hover:text-blue-300">Copy Address</button>
                  </div>
                </div>

                {/* Trading Pairs */}
                <div className="space-y-2 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground">Trading Pairs</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-xs text-foreground">G2G/USDT</span>
                      <span className="text-xs text-green-400">$1.498</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-foreground">G2G/ETH</span>
                      <span className="text-xs text-green-400">0.000423</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-foreground">G2G/WBTC</span>
                      <span className="text-xs text-green-400">0.0000187</span>
                    </div>
                  </div>
                </div>

                {/* Uniswap Widget */}
                <div className="border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground mb-2">Quick Buy</h4>
                  <iframe
                    src="https://app.uniswap.org/#/swap?outputCurrency=0x742d35Cc6634C0532925a3b8D400ABAA1C2B8C8A"
                    height="300"
                    width="100%"
                    className="border-0 rounded"
                    title="Uniswap Interface"
                  />
                </div>

                {/* Price Alerts */}
                <div className="space-y-2 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground">Price Alerts</h4>
                  <div className="flex space-x-2">
                    <input 
                      type="number" 
                      placeholder="$1.00" 
                      className="flex-1 bg-muted border border-border rounded px-2 py-1 text-xs text-foreground"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs text-white">Set Alert</button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground">Recent Activity</h4>
                  <div className="space-y-1 max-h-24 overflow-y-auto">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">Buy 1,250 G2G</span>
                      <span className="text-foreground/80">2m ago</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-red-400">Sell 890 G2G</span>
                      <span className="text-foreground/80">5m ago</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">Buy 3,200 G2G</span>
                      <span className="text-foreground/80">12m ago</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">Buy 567 G2G</span>
                      <span className="text-foreground/80">18m ago</span>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-2 border-t border-border pt-3">
                  <h4 className="text-xs font-semibold text-foreground">Links</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded text-foreground">Website</button>
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded text-foreground">Telegram</button>
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded text-foreground">Twitter</button>
                    <button className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded text-foreground">Discord</button>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-foreground/80 text-center border-t border-border pt-3">
                  <p className="mb-1">⚠️ Investment Disclaimer</p>
                  <p className="leading-relaxed">
                    Cryptocurrency investments carry high risk. G2G tokens are speculative digital assets. 
                    Only invest what you can afford to lose. Past performance does not indicate future results. 
                    This is not financial advice.
                  </p>
                  <p className="mt-2 text-xs">
                    By purchasing G2G tokens, you acknowledge the risks involved in cryptocurrency investments.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default FloatingTokenWidget;