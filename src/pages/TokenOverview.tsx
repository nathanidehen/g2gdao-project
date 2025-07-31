import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { ArrowLeft, Coins, TrendingUp, Users, Lock, Zap, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TokenOverview = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Navigation isVisible={true} onClose={() => {}} />
      
      <main className="container mx-auto px-4 py-16">
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 cursor-blink">
              G2G Token Overview
            </h1>
            <p className="text-xl text-muted-foreground">
              The utility token powering decentralized governance in the G2G DAO ecosystem
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Coins className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">1B</div>
              <div className="text-sm text-muted-foreground">Total Supply</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm text-muted-foreground">Token Holders</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Lock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">65%</div>
              <div className="text-sm text-muted-foreground">Locked/Staked</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold">$0.85</div>
              <div className="text-sm text-muted-foreground">Current Price</div>
            </div>
          </div>

          {/* Token Utility */}
          <div className="border border-border rounded-lg p-8 bg-card mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Token Utility</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Governance Rights</h3>
                <p className="text-sm text-muted-foreground">
                  Vote on proposals, participate in DAO governance, and shape the future of the protocol
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Staking Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Earn rewards by staking tokens and participating in network security and governance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Access & Features</h3>
                <p className="text-sm text-muted-foreground">
                  Unlock premium features, assessments, and exclusive access to DAO resources
                </p>
              </div>
            </div>
          </div>

          {/* Token Distribution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                <PieChart className="w-5 h-5 text-blue-600" />
                Token Distribution
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm">Community & Ecosystem</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">40%</div>
                    <div className="text-xs text-muted-foreground">400M tokens</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm">Team & Advisors</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">20%</div>
                    <div className="text-xs text-muted-foreground">200M tokens</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-sm">Treasury & DAO</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">15%</div>
                    <div className="text-xs text-muted-foreground">150M tokens</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-sm">Public Sale</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">15%</div>
                    <div className="text-xs text-muted-foreground">150M tokens</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm">Liquidity & Market Making</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">10%</div>
                    <div className="text-xs text-muted-foreground">100M tokens</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-center">Vesting Schedule</h3>
              <div className="space-y-4">
                <div className="border border-border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Community & Ecosystem</span>
                    <span className="text-sm text-green-600">Available</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-center">No vesting - for immediate ecosystem growth</p>
                </div>

                <div className="border border-border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Team & Advisors</span>
                    <span className="text-sm text-yellow-600">25% Unlocked</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-center">4-year vesting with 1-year cliff</p>
                </div>

                <div className="border border-border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Treasury & DAO</span>
                    <span className="text-sm text-blue-600">Governance Control</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-center">Released based on governance decisions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Staking & Rewards */}
          <div className="border border-border rounded-lg p-6 bg-card mb-8">
            <h2 className="text-xl font-semibold mb-6 text-center">Staking & Rewards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">12% APY</div>
                <div className="font-semibold mb-1">Base Staking Rewards</div>
                <div className="text-sm text-muted-foreground">For all token holders</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">18% APY</div>
                <div className="font-semibold mb-1">Governance Participation</div>
                <div className="text-sm text-muted-foreground">Active voters & participants</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">25% APY</div>
                <div className="font-semibold mb-1">G-RADE Certified</div>
                <div className="text-sm text-muted-foreground">High G-RADE score holders</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Reward rates are dynamic and adjusted based on network participation, 
                treasury health, and governance decisions. Lock-up periods range from 30 days to 2 years with 
                higher rates for longer commitments.
              </p>
            </div>
          </div>

          {/* Governance Features */}
          <div className="border border-border rounded-lg p-6 bg-card mb-8">
            <h2 className="text-xl font-semibold mb-6 text-center">Governance Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-blue-600 dark:text-blue-400 text-center">Voting Mechanisms</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Quadratic Voting</div>
                      <div className="text-muted-foreground">Prevents whale dominance through cost scaling</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">G-RADE Weighting</div>
                      <div className="text-muted-foreground">Vote power multiplied by competency score</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Delegation</div>
                      <div className="text-muted-foreground">Delegate voting power to trusted representatives</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-green-600 dark:text-green-400 text-center">Proposal Requirements</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Minimum Stake: 10,000 G2G</div>
                      <div className="text-muted-foreground">Prevents spam and ensures commitment</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">G-RADE Score: 75+</div>
                      <div className="text-muted-foreground">Ensures qualified proposal creators</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Community Support</div>
                      <div className="text-muted-foreground">Required endorsements from 100+ members</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Token Economics */}
          <div className="border border-border rounded-lg p-6 bg-card mb-8">
            <h2 className="text-xl font-semibold mb-6 text-center">Token Economics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-center">Deflationary Mechanisms</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Transaction Fees (Burn)</span>
                    <span className="font-medium">0.1% of volume</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Proposal Creation Fee</span>
                    <span className="font-medium">100 G2G</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failed Proposal Penalty</span>
                    <span className="font-medium">50% of fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Burn Rate</span>
                    <span className="font-medium text-red-600">~0.5%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-center">Value Accrual</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Staking Yield</span>
                    <span className="font-medium text-green-600">12-25% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Governance Premium</span>
                    <span className="font-medium">2-6% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Treasury Backing</span>
                    <span className="font-medium">$15M USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Share</span>
                    <span className="font-medium">Quarterly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Get G2G */}
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              How to Get G2G Tokens
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Start participating in the G2G DAO ecosystem and earn governance rights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/how-to-buy-g2g" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Buy G2G Tokens
              </Link>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Start Staking
              </button>
              <Link 
                to="/governance" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Governance
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FloatingTokenWidget />
    </div>
  );
};

export default TokenOverview;