import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Users, Award, Target, TrendingUp, BarChart3, CheckCircle, DollarSign, PieChart } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TokenMetrics = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Navigation isVisible={isNavVisible} onClose={() => setIsNavVisible(false)} />
      
      <main className="pt-8">
        <div className="container mx-auto px-4 py-16">
          {/* Centered Back Button */}
          <div className="text-center mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Centered Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 cursor-blink">
                Token Metrics
              </h1>
              <p className="text-xl text-muted-foreground">
                Detailed analytics and metrics for the G2G token ecosystem
              </p>
            </div>

            {/* Real-time Metrics - Already centered */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">$0.85</div>
                <div className="text-sm text-muted-foreground">Current Price</div>
                <div className="text-xs text-green-600 mt-1">+2.4% (24h)</div>
              </Card>
              <Card className="p-6 text-center">
                <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">$42.5M</div>
                <div className="text-sm text-muted-foreground">Market Cap</div>
                <div className="text-xs text-blue-600 mt-1">Rank #247</div>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">$2.3M</div>
                <div className="text-sm text-muted-foreground">24h Volume</div>
                <div className="text-xs text-purple-600 mt-1">+15.6%</div>
              </Card>
              <Card className="p-6 text-center">
                <Target className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">650M</div>
                <div className="text-sm text-muted-foreground">Circulating Supply</div>
                <div className="text-xs text-muted-foreground mt-1">65% of total</div>
              </Card>
            </div>

            {/* Price Chart Placeholder - Centered content */}
            <Card className="p-6 mb-8">
              <div className="flex justify-center items-center mb-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">Price Chart</h2>
                  <div className="flex gap-2 justify-center">
                    <Button size="sm" className="bg-blue-600 text-white">24H</Button>
                    <Button size="sm" variant="outline">7D</Button>
                    <Button size="sm" variant="outline">30D</Button>
                    <Button size="sm" variant="outline">1Y</Button>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Interactive price chart would be displayed here</p>
                  <p className="text-sm text-muted-foreground mt-2">Integration with TradingView or similar charting library</p>
                </div>
              </div>
            </Card>

            {/* Detailed Metrics - Centered headers */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Supply Metrics
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Supply</span>
                    <span className="font-semibold">1,000,000,000 G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Circulating Supply</span>
                    <span className="font-semibold">650,000,000 G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Staked Tokens</span>
                    <span className="font-semibold">423,000,000 G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Burned Tokens</span>
                    <span className="font-semibold text-red-600">2,500,000 G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Inflation Rate</span>
                    <span className="font-semibold text-green-600">-0.5% annually</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Trading Metrics
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">All-Time High</span>
                    <span className="font-semibold">$1.24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">All-Time Low</span>
                    <span className="font-semibold">$0.18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">7-Day High</span>
                    <span className="font-semibold">$0.89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">7-Day Low</span>
                    <span className="font-semibold">$0.79</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Volatility (30d)</span>
                    <span className="font-semibold">24.3%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Holder Distribution - Centered header */}
            <Card className="p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
                  <PieChart className="w-5 h-5 text-purple-600" />
                  Holder Distribution
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-center">By Holdings Size</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span className="text-sm">Whales ({'>'}1M G2G)</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">47%</div>
                        <div className="text-xs text-muted-foreground">156 holders</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-sm">Large (100K-1M G2G)</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">28%</div>
                        <div className="text-xs text-muted-foreground">1,242 holders</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-sm">Medium (10K-100K G2G)</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">18%</div>
                        <div className="text-xs text-muted-foreground">8,934 holders</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm">Small ({'<'}10K G2G)</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">7%</div>
                        <div className="text-xs text-muted-foreground">39,847 holders</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-center">By Entity Type</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-sm">Individual Holders</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">65%</div>
                        <div className="text-xs text-muted-foreground">48,237 addresses</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-sm">Staking Contracts</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">25%</div>
                        <div className="text-xs text-muted-foreground">12 contracts</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm">Exchanges</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">7%</div>
                        <div className="text-xs text-muted-foreground">23 exchanges</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-sm">Treasury/DAO</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">3%</div>
                        <div className="text-xs text-muted-foreground">5 multisigs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Staking Metrics - Centered header */}
            <Card className="p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Staking Metrics</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">65.1%</div>
                  <div className="font-semibold mb-1">Staking Ratio</div>
                  <div className="text-sm text-muted-foreground">423M G2G staked</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">16.5%</div>
                  <div className="font-semibold mb-1">Average APY</div>
                  <div className="text-sm text-muted-foreground">Weighted by duration</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">127 days</div>
                  <div className="font-semibold mb-1">Avg Lock Period</div>
                  <div className="text-sm text-muted-foreground">Across all stakers</div>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-center">Staking Duration Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>30 days (12% APY)</span>
                      <span className="font-medium">28% of stakes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90 days (15% APY)</span>
                      <span className="font-medium">35% of stakes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>180 days (18% APY)</span>
                      <span className="font-medium">23% of stakes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1 year (22% APY)</span>
                      <span className="font-medium">10% of stakes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 years (25% APY)</span>
                      <span className="font-medium">4% of stakes</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-center">Recent Staking Activity</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>New Stakes (7d)</span>
                      <span className="font-medium text-green-600">+12.4M G2G</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Unstaked (7d)</span>
                      <span className="font-medium text-red-600">-8.1M G2G</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Net Staking Flow</span>
                      <span className="font-medium text-green-600">+4.3M G2G</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rewards Distributed</span>
                      <span className="font-medium">2.1M G2G</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Stakers</span>
                      <span className="font-medium">18,429 addresses</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Governance Participation - Centered header */}
            <Card className="p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Governance Participation</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">42.3%</div>
                  <div className="font-semibold mb-1">Voting Participation</div>
                  <div className="text-sm text-muted-foreground">Last 30 days avg</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">15,247</div>
                  <div className="font-semibold mb-1">Active Voters</div>
                  <div className="text-sm text-muted-foreground">Unique addresses</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">2.8x</div>
                  <div className="font-semibold mb-1">G-RADE Multiplier</div>
                  <div className="text-sm text-muted-foreground">Average voting weight</div>
                </div>
              </div>
            </Card>

            {/* Treasury Metrics - Centered header */}
            <Card className="p-6 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Treasury Metrics</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-center">Treasury Composition</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">G2G Tokens</span>
                      <span className="font-medium">150M G2G ($127.5M)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">USDC</span>
                      <span className="font-medium">$8.4M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ETH</span>
                      <span className="font-medium">2,450 ETH ($5.2M)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Other Assets</span>
                      <span className="font-medium">$1.8M</span>
                    </div>
                    <div className="pt-2 border-t border-border flex justify-between items-center font-semibold">
                      <span>Total Treasury Value</span>
                      <span>$142.9M</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-center">Monthly Treasury Activity</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Revenue (Fees)</span>
                      <span className="font-medium text-green-600">+$245K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Staking Rewards</span>
                      <span className="font-medium text-red-600">-$890K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Development Grants</span>
                      <span className="font-medium text-red-600">-$120K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Operations</span>
                      <span className="font-medium text-red-600">-$85K</span>
                    </div>
                    <div className="pt-2 border-t border-border flex justify-between items-center font-semibold">
                      <span>Net Treasury Change</span>
                      <span className="text-red-600">-$850K</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Section - Centered */}
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Want to Dive Deeper?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Explore more detailed analytics and real-time data on our token metrics dashboard.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  View Live Dashboard
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/token-overview">
                    Token Overview
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/governance">
                    Governance Data
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingTokenWidget />
    </div>
  );
};

export default TokenMetrics;