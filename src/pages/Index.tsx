import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechGrid from '@/components/TechGrid';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Detailed content for each DAO technology card
const getDetailedContent = (cardId: string) => {
  const content = {
    'privacy-kyc': {
      title: 'Privacy-Preserving KYC',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              PRIVACY-PRESERVING KYC
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Our Industry-Defined Revolution
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Platform Overview */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">REVOLUTIONARY IDENTITY VERIFICATION</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Privacy-Preserving KYC revolutionizes identity verification by combining zero-knowledge proofs with advanced cryptographic protocols. Our platform enables organizations to meet global compliance requirements while protecting user privacy through cutting-edge mathematical techniques that verify identity without exposing sensitive personal data.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional KYC processes require extensive personal data collection, creating privacy risks and regulatory challenges. Our solution transforms this paradigm by enabling verification of identity attributes without revealing the underlying data, achieving both compliance and privacy simultaneously.
              </p>
            </section>

            {/* Privacy Metrics */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">PRIVACY METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                  <div className="text-sm font-medium mb-1">Privacy Score</div>
                  <div className="text-xs text-green-600">Zero data exposure</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95+</div>
                  <div className="text-sm font-medium mb-1">Global Jurisdictions</div>
                  <div className="text-xs text-green-600">Compliance coverage</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                  <div className="text-3xl font-bold text-purple-600 mb-2">&lt; 3s</div>
                  <div className="text-sm font-medium mb-1">Verification Speed</div>
                  <div className="text-xs text-green-600">-97% vs traditional</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                  <div className="text-3xl font-bold text-orange-600 mb-2">0.01%</div>
                  <div className="text-sm font-medium mb-1">False Positive Rate</div>
                  <div className="text-xs text-green-600">-99.9% improvement</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                  <div className="text-sm font-medium mb-1">Data Breaches</div>
                  <div className="text-xs text-green-600">Mathematically impossible</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">98.5%</div>
                  <div className="text-sm font-medium mb-1">User Adoption</div>
                  <div className="text-xs text-green-600">+45% vs traditional KYC</div>
                </Card>
              </div>
            </section>
            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">KEY FEATURES</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Zero-knowledge proof identity verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Multi-jurisdictional compliance automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Decentralized identity management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Biometric template protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time risk assessment</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Regulatory reporting automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cross-border identity portability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Anonymous credential issuance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Fraud detection without data exposure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">GDPR and CCPA compliant by design</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TECHNICAL SPECIFICATIONS</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>zk-SNARK proofs: <span className="text-primary">Advanced implementation</span></div>
                    <div>Encryption: <span className="text-primary">Homomorphic</span></div>
                    <div>Identity standards: <span className="text-primary">Self-sovereign (SSI)</span></div>
                    <div>Compliance: <span className="text-primary">Multi-jurisdiction</span></div>
                    <div>Processing time: <span className="text-primary">&lt; 3 seconds</span></div>
                  </div>
                  <div className="space-y-2">
                    <div>Security: <span className="text-primary">Quantum-resistant</span></div>
                    <div>Storage: <span className="text-primary">Distributed ledger</span></div>
                    <div>Integration: <span className="text-primary">RESTful APIs</span></div>
                    <div>Verification: <span className="text-primary">Merkle tree-based</span></div>
                    <div>Architecture: <span className="text-primary">TEE integration</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    },
    'patent-plus': {
      title: 'Patent Plus Technology',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              PATENT PLUS
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Proprietary Technology Platform
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Platform Overview */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">INTELLECTUAL PROPERTY REVOLUTION</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Patent Plus transforms intellectual property management through blockchain tokenization and decentralized funding mechanisms. Our platform creates liquid markets for patent rights, enables fractional ownership, and democratizes innovation funding while protecting creators' rights through smart contract automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional IP markets suffer from illiquidity, high transaction costs, and limited access to capital. Patent Plus solves these challenges by tokenizing patent rights, creating global marketplaces, and enabling new funding models that accelerate innovation while maximizing returns for inventors and investors.
              </p>
            </section>

            {/* Innovation Metrics */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">INNOVATION METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12,500+</div>
                  <div className="text-sm font-medium mb-1">Patents Tokenized</div>
                  <div className="text-xs text-green-600">+300% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$2.8B</div>
                  <div className="text-sm font-medium mb-1">Funding Raised</div>
                  <div className="text-xs text-green-600">+450% vs traditional</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
                  <div className="text-sm font-medium mb-1">Innovation Speed</div>
                  <div className="text-xs text-green-600">Faster to market</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+180%</div>
                  <div className="text-sm font-medium mb-1">Licensing Revenue</div>
                  <div className="text-xs text-green-600">Increase for creators</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <div className="text-3xl font-bold text-green-600 mb-2">125</div>
                  <div className="text-sm font-medium mb-1">Global Reach</div>
                  <div className="text-xs text-green-600">Countries covered</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">$450M</div>
                  <div className="text-sm font-medium mb-1">Transaction Volume</div>
                  <div className="text-xs text-green-600">Monthly trading</div>
                </Card>
              </div>
            </section>
            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">KEY FEATURES</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Patent tokenization and fractionalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Decentralized innovation funding pools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Automated royalty distribution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">IP valuation and analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cross-border licensing automation</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Prior art discovery and analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Collaborative innovation platforms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Smart contract-based agreements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">IP portfolio optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time market intelligence</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TECHNICAL SPECIFICATIONS</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>Token standards: <span className="text-primary">ERC-721 & ERC-1155</span></div>
                    <div>Storage: <span className="text-primary">IPFS distributed</span></div>
                    <div>Security: <span className="text-primary">Multi-signature wallets</span></div>
                    <div>Data feeds: <span className="text-primary">Oracle networks</span></div>
                    <div>Scaling: <span className="text-primary">Layer 2 solutions</span></div>
                  </div>
                  <div className="space-y-2">
                    <div>Liquidity: <span className="text-primary">Automated market makers</span></div>
                    <div>Interop: <span className="text-primary">Cross-chain protocols</span></div>
                    <div>Analytics: <span className="text-primary">AI-powered patent analysis</span></div>
                    <div>Governance: <span className="text-primary">Token mechanisms</span></div>
                    <div>Compliance: <span className="text-primary">Regulatory automation</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    },
    'insurance-escrow': {
      title: 'Digital Insurance Escrow',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              DIGITAL INSURANCE ESCROW
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Digital Loss Compensation
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Platform Overview */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">AUTOMATED DIGITAL PROTECTION</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Digital Insurance Escrow provides automated, parametric insurance for the digital economy. Our platform uses smart contracts, real-time monitoring, and algorithmic assessment to deliver instant compensation for digital asset losses, smart contract failures, and cybersecurity breaches without traditional claims processes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional insurance requires lengthy claims processing and subjective assessments. Our parametric approach eliminates these inefficiencies by automatically triggering payouts based on verifiable, objective data sources, reducing settlement times from weeks to minutes.
              </p>
            </section>
            {/* Protection Metrics */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">PROTECTION METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$15.2B</div>
                  <div className="text-sm font-medium mb-1">Assets Protected</div>
                  <div className="text-xs text-green-600">+850% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <div className="text-3xl font-bold text-green-600 mb-2">45,000+</div>
                  <div className="text-sm font-medium mb-1">Claims Processed</div>
                  <div className="text-xs text-green-600">100% automated</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                  <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 10 min</div>
                  <div className="text-sm font-medium mb-1">Payout Speed</div>
                  <div className="text-xs text-green-600">vs 30+ days traditional</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
                  <div className="text-sm font-medium mb-1">Coverage Accuracy</div>
                  <div className="text-xs text-green-600">Algorithmic precision</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">70%</div>
                  <div className="text-sm font-medium mb-1">Premium Reduction</div>
                  <div className="text-xs text-green-600">vs traditional insurance</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                  <div className="text-sm font-medium mb-1">Global Coverage</div>
                  <div className="text-xs text-green-600">Continuous monitoring</div>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">KEY FEATURES</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Parametric smart contract insurance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time asset monitoring and alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Instant automated claim processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Multi-risk coverage pools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Decentralized risk assessment</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cross-chain asset protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cyber security breach coverage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Smart contract failure protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">DeFi protocol insurance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Staking and yield farming protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Technical Specifications */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TECHNICAL SPECIFICATIONS</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>Insurance type: <span className="text-primary">Parametric smart contracts</span></div>
                    <div>Data feeds: <span className="text-primary">Oracle networks</span></div>
                    <div>Treasury: <span className="text-primary">Multi-signature management</span></div>
                    <div>Underwriting: <span className="text-primary">Automated algorithms</span></div>
                    <div>Risk pooling: <span className="text-primary">Capital optimization</span></div>
                  </div>
                  <div className="space-y-2">
                    <div>Monitoring: <span className="text-primary">Cross-chain bridges</span></div>
                    <div>Protection: <span className="text-primary">MEV and front-running</span></div>
                    <div>Verification: <span className="text-primary">Formal smart contracts</span></div>
                    <div>Modeling: <span className="text-primary">Actuarial pricing engines</span></div>
                    <div>Compliance: <span className="text-primary">Regulatory frameworks</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    },
    'nft-platform': {
      title: 'Self-Sovereign NFT Platform',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              SELF-SOVEREIGN NFT PLATFORM
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              True Ownership
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Platform Overview */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TRUE DIGITAL OWNERSHIP</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Self-Sovereign NFT Platform empowers creators and collectors with true ownership and control over digital assets. Our decentralized ecosystem eliminates platform dependencies, enables cross-chain compatibility, and provides creators with perpetual royalties while giving collectors genuine ownership rights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional NFT platforms create vendor lock-in and platform risk. Our self-sovereign approach ensures that creators and collectors maintain control over their digital assets regardless of platform changes, creating a truly decentralized and sustainable NFT ecosystem.
              </p>
            </section>

            {/* Ecosystem Metrics */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">ECOSYSTEM METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2.8M+</div>
                  <div className="text-sm font-medium mb-1">NFTs Minted</div>
                  <div className="text-xs text-green-600">+400% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$450M</div>
                  <div className="text-sm font-medium mb-1">Creator Revenue</div>
                  <div className="text-xs text-green-600">+300% vs platforms</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                  <div className="text-sm font-medium mb-1">True Ownership</div>
                  <div className="text-xs text-green-600">Platform independent</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-sm font-medium mb-1">Cross-Chain Support</div>
                  <div className="text-xs text-green-600">Blockchain networks</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm font-medium mb-1">Royalty Enforcement</div>
                  <div className="text-xs text-green-600">Perpetual creator rights</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">85%</div>
                  <div className="text-sm font-medium mb-1">Gas Savings</div>
                  <div className="text-xs text-green-600">vs traditional platforms</div>
                </Card>
              </div>
            </section>
            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">KEY FEATURES</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Decentralized NFT creation and trading</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cross-chain interoperability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Perpetual creator royalty enforcement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Self-custody wallet integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Fractional ownership capabilities</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Community governance mechanisms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Zero-fee secondary market trading</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Advanced metadata and provenance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Creator funding and collaboration tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Intellectual property protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TECHNICAL SPECIFICATIONS</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>Minting: <span className="text-primary">ERC-721A optimized</span></div>
                    <div>Storage: <span className="text-primary">IPFS and Arweave permanent</span></div>
                    <div>Bridges: <span className="text-primary">Cross-chain protocols</span></div>
                    <div>Royalties: <span className="text-primary">EIP-2981 standard</span></div>
                    <div>Scaling: <span className="text-primary">Layer 2 integration</span></div>
                  </div>
                  <div className="space-y-2">
                    <div>Identity: <span className="text-primary">Decentralized verification</span></div>
                    <div>Marketplace: <span className="text-primary">Smart contract-based</span></div>
                    <div>Metadata: <span className="text-primary">Encrypted access control</span></div>
                    <div>Governance: <span className="text-primary">DAO framework</span></div>
                    <div>Security: <span className="text-primary">Anti-fraud verification</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    },
    'grade-research': {
      title: 'G-RADE™ Research Platform',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              G-RADE™ RESEARCH
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Advanced Analytics and Intelligence Platform
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Platform Overview */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">PLATFORM OVERVIEW</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                G-RADE™ Research represents the evolution of traditional financial analysis for the Web3 era. Our platform combines institutional-grade research methodologies with cutting-edge blockchain analytics to provide comprehensive project assessment and risk evaluation frameworks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The platform serves as the foundation for informed decision-making in the digital asset space, offering multi-dimensional analysis that goes beyond simple price metrics to evaluate fundamental project health, team competency, technical innovation, and market positioning.
              </p>
            </section>
            {/* Assessment Categories */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">ASSESSMENT CATEGORIES</h3>
              <div className="grid gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-mono font-semibold text-lg mb-2">Technical Foundation</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Comprehensive evaluation of code quality, architecture design, security audit results, technical innovation, and development activity.
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-primary">87</div>
                      <div className="text-xs text-muted-foreground">25% weight</div>
                    </div>
                  </div>
                  <Progress value={87} className="h-2 mb-2" />
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="outline" className="font-mono">Code Quality</Badge>
                    <Badge variant="outline" className="font-mono">Security Audits</Badge>
                    <Badge variant="outline" className="font-mono">Development Activity</Badge>
                    <Badge variant="outline" className="font-mono">Innovation Index</Badge>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-mono font-semibold text-lg mb-2">Team & Leadership</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        In-depth analysis of team experience, track record, transparency levels, governance structure, and leadership capabilities.
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-primary">92</div>
                      <div className="text-xs text-muted-foreground">20% weight</div>
                    </div>
                  </div>
                  <Progress value={92} className="h-2 mb-2" />
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="outline" className="font-mono">Experience Rating</Badge>
                    <Badge variant="outline" className="font-mono">Track Record</Badge>
                    <Badge variant="outline" className="font-mono">Transparency</Badge>
                    <Badge variant="outline" className="font-mono">Governance</Badge>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-mono font-semibold text-lg mb-2">Market Position</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Strategic analysis of competitive advantage, total addressable market size, adoption potential, and partnership quality.
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-primary">78</div>
                      <div className="text-xs text-muted-foreground">20% weight</div>
                    </div>
                  </div>
                  <Progress value={78} className="h-2 mb-2" />
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="outline" className="font-mono">Market Size</Badge>
                    <Badge variant="outline" className="font-mono">Competitive Edge</Badge>
                    <Badge variant="outline" className="font-mono">Partnerships</Badge>
                    <Badge variant="outline" className="font-mono">Adoption</Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-mono font-semibold mb-2">Tokenomics</h4>
                        <p className="text-xs text-muted-foreground mb-3">Token utility, distribution, vesting schedules</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">84</div>
                        <div className="text-xs text-muted-foreground">15% weight</div>
                      </div>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-mono font-semibold mb-2">Community</h4>
                        <p className="text-xs text-muted-foreground mb-3">User growth, engagement, ecosystem development</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">89</div>
                        <div className="text-xs text-muted-foreground">10% weight</div>
                      </div>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </div>
              </div>
            </section>
            {/* Impact Metrics */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">IMPACT METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-3xl font-bold text-primary mb-2">2,847</div>
                  <div className="text-sm font-medium mb-1">Research Reports Generated</div>
                  <div className="text-xs text-green-600">+34% QoQ</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                  <div className="text-sm font-medium mb-1">Projects Analyzed</div>
                  <div className="text-xs text-green-600">+156% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <div className="text-3xl font-bold text-green-600 mb-2">15,423</div>
                  <div className="text-sm font-medium mb-1">Risk Alerts Delivered</div>
                  <div className="text-xs text-green-600">+89% QoQ</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                  <div className="text-3xl font-bold text-purple-600 mb-2">94.2%</div>
                  <div className="text-sm font-medium mb-1">Client Success Rate</div>
                  <div className="text-xs text-green-600">+12.3% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                  <div className="text-3xl font-bold text-orange-600 mb-2">91.7%</div>
                  <div className="text-sm font-medium mb-1">Research Accuracy</div>
                  <div className="text-xs text-green-600">+5.2% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-red-500/5 to-red-500/10">
                  <div className="text-3xl font-bold text-red-600 mb-2">99.96%</div>
                  <div className="text-sm font-medium mb-1">Platform Uptime</div>
                  <div className="text-xs text-green-600">+0.1% QoQ</div>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">KEY FEATURES</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Multi-dimensional project assessment framework</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time risk scoring and monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">AI-powered predictive analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Institutional-grade research reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Automated compliance screening</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Cross-chain portfolio analysis (15+ networks)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Sub-second alert delivery systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Professional research team integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Advanced tokenomics modeling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Community sentiment analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Technical Specifications */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TECHNICAL SPECIFICATIONS</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>Multi-chain data: <span className="text-primary">15+ networks</span></div>
                    <div>Processing capacity: <span className="text-primary">1M+ tx/day</span></div>
                    <div>AI training data: <span className="text-primary">5+ years</span></div>
                    <div>Alert delivery: <span className="text-primary">Sub-second</span></div>
                    <div>Security: <span className="text-primary">Enterprise-grade</span></div>
                  </div>
                  <div className="space-y-2">
                    <div>API integration: <span className="text-primary">RESTful</span></div>
                    <div>Uptime SLA: <span className="text-primary">99.9%</span></div>
                    <div>Dashboard: <span className="text-primary">Custom builder</span></div>
                    <div>Data retention: <span className="text-primary">7+ years</span></div>
                    <div>Risk modeling: <span className="text-primary">Monte Carlo</span></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">USE CASES</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Institutional Due Diligence</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive project evaluation for institutional investors requiring detailed risk assessment and regulatory compliance documentation.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Portfolio Risk Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring of portfolio exposure across multiple projects with automated rebalancing recommendations.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Compliance Screening</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated compliance checking against multiple jurisdictional requirements for institutional and retail investors.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Market Intelligence</h4>
                  <p className="text-sm text-muted-foreground">
                    Predictive analytics and trend identification for strategic investment planning and market timing decisions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    },
    'investor-dashboard': {
      title: 'Investor Dashboard',
      content: (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
              INVESTOR DASHBOARD
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              Portfolio Management Excellence
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Platform Overview */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">COMPREHENSIVE PORTFOLIO MANAGEMENT</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Investor Dashboard provides institutional-grade portfolio management for digital assets through AI-powered analytics, automated rebalancing, and comprehensive risk assessment. Our platform integrates traditional and DeFi investments with advanced tools for professional asset management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Modern portfolio management requires real-time data, advanced analytics, and automated execution. Our dashboard combines these elements with intuitive interfaces that enable both institutional and sophisticated retail investors to optimize their digital asset portfolios.
              </p>
            </section>
            {/* Performance Metrics */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">PERFORMANCE METRICS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-to-br from-cyan-500/5 to-cyan-500/10">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">$8.5B</div>
                  <div className="text-sm font-medium mb-1">Assets Under Management</div>
                  <div className="text-xs text-green-600">+420% YoY</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10">
                  <div className="text-3xl font-bold text-green-600 mb-2">+34.7%</div>
                  <div className="text-sm font-medium mb-1">Portfolio Performance</div>
                  <div className="text-xs text-green-600">vs benchmark</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2.8x</div>
                  <div className="text-sm font-medium mb-1">Risk-Adjusted Returns</div>
                  <div className="text-xs text-green-600">Sharpe ratio</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-sm font-medium mb-1">Rebalancing Efficiency</div>
                  <div className="text-xs text-green-600">Automated optimization</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                  <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                  <div className="text-sm font-medium mb-1">Cost Reduction</div>
                  <div className="text-xs text-green-600">vs traditional managers</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-sm font-medium mb-1">Real-time Analytics</div>
                  <div className="text-xs text-green-600">Continuous monitoring</div>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">KEY FEATURES</h3>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time portfolio tracking and analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Automated rebalancing algorithms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Multi-asset class risk assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">DeFi yield optimization strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Tax loss harvesting automation</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Institutional custody integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Advanced charting and technical analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Compliance and regulatory reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Custom alert and notification systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">API integration for trading platforms</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Technical Specifications */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">TECHNICAL SPECIFICATIONS</h3>
              <div className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div>Data aggregation: <span className="text-primary">Real-time market feeds</span></div>
                    <div>Optimization: <span className="text-primary">Machine learning algorithms</span></div>
                    <div>Security: <span className="text-primary">Multi-signature wallets</span></div>
                    <div>Protocols: <span className="text-primary">Institutional-grade</span></div>
                    <div>APIs: <span className="text-primary">High-frequency trading support</span></div>
                  </div>
                  <div className="space-y-2">
                    <div>Risk management: <span className="text-primary">VaR calculations</span></div>
                    <div>Arbitrage: <span className="text-primary">Cross-exchange detection</span></div>
                    <div>Compliance: <span className="text-primary">Regulatory automation</span></div>
                    <div>Backtesting: <span className="text-primary">Advanced frameworks</span></div>
                    <div>Analytics: <span className="text-primary">Real-time P&L attribution</span></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary">USE CASES</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Institutional Asset Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional portfolio management tools for institutional investors managing large digital asset portfolios with sophisticated risk management requirements.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Family Office Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive wealth management platform for high-net-worth individuals and family offices seeking professional-grade digital asset management.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Hedge Fund Operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced trading and portfolio optimization tools for cryptocurrency hedge funds requiring institutional-grade analytics and risk management.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-mono font-semibold mb-3">Corporate Treasury</h4>
                  <p className="text-sm text-muted-foreground">
                    Enterprise treasury management solutions for corporations holding digital assets as part of their treasury strategy and investment portfolio.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    }
  };

  return content[cardId as keyof typeof content] || null;
};

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const selectedCard = searchParams.get('card');

  useEffect(() => {
    if (selectedCard) {
      setIsMenuVisible(true);
      // Scroll to top when a card is selected
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsMenuVisible(false);
    }
  }, [selectedCard]);

  const handleCardClick = (cardId: string) => {
    setSearchParams({ card: cardId });
  };

  const handleMenuClose = () => {
    setSearchParams({});
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (!selectedCard) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedCard]);

  const detailedContent = selectedCard ? getDetailedContent(selectedCard) : null;

  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <Navigation isVisible={isMenuVisible} onClose={handleMenuClose} />
      
      {detailedContent ? (
        // Show detailed content when a card is selected
        <main className="pt-8">
          {detailedContent.content}
        </main>
      ) : (
        // Show normal homepage when no card is selected
        <main>
          <HeroSection />
          <TechGrid onCardClick={handleCardClick} />
        </main>
      )}
      
      <FloatingTokenWidget />
    </div>
  );
};

export default Index;
