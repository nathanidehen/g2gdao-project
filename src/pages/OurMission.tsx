import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { ArrowLeft, Target, Users, Globe, Shield, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurMission = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Navigation isVisible={true} onClose={() => {}} />
      
      <main className="pt-8">
        <div className="container mx-auto px-4 py-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 cursor-blink">
                Our Mission
              </h1>
              <p className="text-xl text-muted-foreground">
                Democratizing governance through technology, education, and community empowerment
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-12">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                  Empowering Quality Governance for All
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  At G2G DAO, we believe that effective governance is the cornerstone of any thriving organization. 
                  Our mission is to create a world where decentralized decision-making is accessible, informed, 
                  and truly representative of community values through innovative technology and education.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border border-border rounded-lg p-6 bg-card text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We believe governance should be accessible to everyone, regardless of technical background or financial status.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  Every decision, vote, and process should be open, verifiable, and understandable to all participants.
                </p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We push the boundaries of what's possible in governance through cutting-edge technology and research.
                </p>
              </div>
            </div>

            {/* The Problem We Solve */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">The Problem We Solve</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Low-Quality Participation</h3>
                  <p className="text-muted-foreground">
                    Current DAO governance suffers from uninformed voting, where token holders make decisions 
                    without understanding the implications or having the necessary expertise.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Identity & Sybil Attacks</h3>
                  <p className="text-muted-foreground">
                    Lack of robust identity verification allows bad actors to create multiple accounts and 
                    manipulate governance outcomes through coordinated attacks.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Whale Dominance</h3>
                  <p className="text-muted-foreground">
                    Token-weighted voting systems often lead to governance capture by large holders, 
                    undermining the democratic principles DAOs should embody.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Innovative Solution</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">G-RADE Assessment System</h3>
                  <p className="text-muted-foreground mb-4">
                    Our proprietary Governance Readiness and Aptitude for Decentralized Engagement system 
                    ensures that voting power is correlated with competency and understanding.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Multi-dimensional competency assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Continuous learning and improvement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Voting power multipliers based on expertise
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-green-600 dark:text-green-400">Web3 Identity Framework</h3>
                  <p className="text-muted-foreground mb-4">
                    Privacy-preserving identity verification that prevents Sybil attacks while maintaining 
                    user anonymity and protecting personal data.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Zero-knowledge proof verification
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Biometric authentication options
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      Decentralized credential management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision for the Future */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-purple-600" />
                Vision for the Future
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  We envision a world where decentralized governance is the standard for organizations 
                  of all sizes - from local community groups to multinational corporations. A world where:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Universal Participation</h3>
                        <p className="text-sm text-muted-foreground">
                          Every individual has the opportunity to participate meaningfully in governance decisions that affect them.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Educated Decisions</h3>
                        <p className="text-sm text-muted-foreground">
                          Governance decisions are made by informed participants who understand the implications of their choices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Global Standards</h3>
                        <p className="text-sm text-muted-foreground">
                          G2G DAO's governance frameworks become the gold standard for decentralized organizations worldwide.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Continuous Innovation</h3>
                        <p className="text-sm text-muted-foreground">
                          Governance systems evolve and improve through community-driven research and development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Impact Goals</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Educated governance participants by 2030</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10,000</div>
                  <div className="text-sm text-muted-foreground">Organizations using G2G frameworks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries with G2G governance adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Open-source governance tools</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                Join Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Be part of the movement to democratize governance and empower communities worldwide. 
                Together, we can build a more equitable and effective future for decentralized organizations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/how-to-buy-g2g" 
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Become an Investor
                </Link>
                <Link 
                  to="/dao-fundamentals" 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Learn About DAOs
                </Link>
                <Link 
                  to="/team" 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingTokenWidget />
    </div>
  );
};

export default OurMission;