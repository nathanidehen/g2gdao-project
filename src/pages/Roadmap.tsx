import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { ArrowLeft, Calendar, CheckCircle, Clock, Target, Zap, Users, Shield, Coins, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Roadmap = () => {
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
              G2G DAO Roadmap
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey towards building the most comprehensive decentralized governance system for assessing and improving government performance
            </p>
          </div>

          {/* Timeline - Left Aligned */}
          <div className="space-y-12">
            
            {/* Phase 1 - COMPLETED */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-green-500 rounded-full p-3 border-4 border-background shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  PHASE 1 - COMPLETED
                </div>
                <h2 className="text-2xl font-bold mb-4">Foundation & Research</h2>
                <p className="text-muted-foreground mb-6">
                  Q1 2024 - Q2 2024: Building the core infrastructure and conducting extensive research on governance assessment methodologies.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Core Protocol</div>
                    <div className="text-xs text-muted-foreground">Smart contracts deployed</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Team Assembly</div>
                    <div className="text-xs text-muted-foreground">Core team hired</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <Target className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Research Complete</div>
                    <div className="text-xs text-muted-foreground">Methodology defined</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <Coins className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Token Design</div>
                    <div className="text-xs text-muted-foreground">Tokenomics finalized</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 - IN PROGRESS */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-500 rounded-full p-3 border-4 border-background shadow-lg animate-pulse">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  PHASE 2 - IN PROGRESS
                </div>
                <h2 className="text-2xl font-bold mb-4">Platform Development & Testing</h2>
                <p className="text-muted-foreground mb-6">
                  Q3 2024 - Q4 2024: Building the G-RADE assessment platform and conducting extensive testing with pilot communities.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-2"></div>
                    <div className="font-semibold text-sm">G-RADE Algorithm</div>
                    <div className="text-xs text-muted-foreground">75% Complete</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-2"></div>
                    <div className="font-semibold text-sm">Web Platform</div>
                    <div className="text-xs text-muted-foreground">60% Complete</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-2"></div>
                    <div className="font-semibold text-sm">Beta Testing</div>
                    <div className="text-xs text-muted-foreground">40% Complete</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="w-6 h-6 bg-gray-400 rounded mx-auto mb-2"></div>
                    <div className="font-semibold text-sm">Security Audit</div>
                    <div className="text-xs text-muted-foreground">Pending</div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 - UPCOMING */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-purple-500 rounded-full p-3 border-4 border-background shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  PHASE 3 - UPCOMING
                </div>
                <h2 className="text-2xl font-bold mb-4">Token Launch & Community Building</h2>
                <p className="text-muted-foreground mb-6">
                  Q1 2025 - Q2 2025: Official token launch, community onboarding, and initial governance implementations.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-75">
                    <Coins className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Token Launch</div>
                    <div className="text-xs text-muted-foreground">Public sale & distribution</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-75">
                    <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Community Growth</div>
                    <div className="text-xs text-muted-foreground">10K+ active members</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-75">
                    <Shield className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Governance Live</div>
                    <div className="text-xs text-muted-foreground">First proposals & votes</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-75">
                    <Target className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Pilot Programs</div>
                    <div className="text-xs text-muted-foreground">3 government pilots</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 - FUTURE */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-orange-500 rounded-full p-3 border-4 border-background shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  PHASE 4 - FUTURE
                </div>
                <h2 className="text-2xl font-bold mb-4">Scale & Global Expansion</h2>
                <p className="text-muted-foreground mb-6">
                  Q3 2025 - Q4 2025: Scaling to multiple regions, advanced features, and establishing global partnerships.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-60">
                    <Globe className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Global Reach</div>
                    <div className="text-xs text-muted-foreground">50+ regions covered</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-60">
                    <Zap className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">AI Integration</div>
                    <div className="text-xs text-muted-foreground">Advanced analytics</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-60">
                    <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">1M+ Users</div>
                    <div className="text-xs text-muted-foreground">Global community</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center opacity-60">
                    <Shield className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-sm">Full Decentralization</div>
                    <div className="text-xs text-muted-foreground">Community governed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Metrics */}
          <div className="border border-border rounded-lg p-8 bg-card mb-8 mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Current Progress Metrics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">65%</div>
                <div className="font-semibold mb-1">Platform Development</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2.5K</div>
                <div className="font-semibold mb-1">Beta Testers</div>
                <div className="text-sm text-muted-foreground">Active in pilot program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
                <div className="font-semibold mb-1">Government Partners</div>
                <div className="text-sm text-muted-foreground">Pilot implementations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">8</div>
                <div className="font-semibold mb-1">Months to Launch</div>
                <div className="text-sm text-muted-foreground">Token public sale</div>
              </div>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="border border-border rounded-lg p-8 bg-card mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Key Milestones</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Security Audit Completion</div>
                    <div className="text-sm text-muted-foreground">Third-party security review</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-600">December 2024</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="font-semibold">Token Generation Event</div>
                    <div className="text-sm text-muted-foreground">Official G2G token launch</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-purple-600">January 2025</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold">First Governance Vote</div>
                    <div className="text-sm text-muted-foreground">Community-driven decision making</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-green-600">March 2025</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold">Global Expansion Launch</div>
                    <div className="text-sm text-muted-foreground">Multi-region rollout begins</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-orange-600">June 2025</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of the revolution in government accountability and decentralized governance. Follow our progress and get involved in shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/community" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Join Community
              </Link>
              <Link 
                to="/whitepaper" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Read Whitepaper
              </Link>
              <Link 
                to="/token-overview" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Learn About G2G Token
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FloatingTokenWidget />
    </div>
  );
};

export default Roadmap;