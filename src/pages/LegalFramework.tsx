import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { ArrowLeft, Scale, Shield, FileText, Globe, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalFramework = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Navigation isVisible={true} onClose={() => {}} />
      
      <main className="pt-8">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold font-mono mb-8 tracking-tighter">
                LEGAL FRAMEWORK
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive legal structure ensuring compliance and protection for all participants
              </p>
            </div>

            {/* Legal Status Overview */}
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Legal Status & Structure</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                G2G DAO operates as a legally compliant decentralized autonomous organization under the 
                jurisdiction of Switzerland, with additional legal protections in the European Union and 
                United States.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Primary Jurisdiction</h3>
                  <p className="text-sm text-muted-foreground">
                    Swiss Foundation (Stiftung) registered in Zug, Switzerland - a jurisdiction known 
                    for progressive blockchain and cryptocurrency regulations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Additional Registrations</h3>
                  <p className="text-sm text-muted-foreground">
                    EU GDPR compliance entity in Estonia, and Delaware LLC for US operations and 
                    regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                Regulatory Compliance
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-green-600 dark:text-green-400">Securities Compliance</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Regulation D Compliance (US)</p>
                        <p className="text-sm text-muted-foreground">Private placement offering limited to accredited investors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">MiFID II Compliance (EU)</p>
                        <p className="text-sm text-muted-foreground">Financial instruments directive compliance for European investors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">FINMA Guidelines (Switzerland)</p>
                        <p className="text-sm text-muted-foreground">Swiss financial market supervisory authority compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Data Protection & Privacy</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">GDPR Compliance</p>
                        <p className="text-sm text-muted-foreground">Full compliance with EU General Data Protection Regulation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">CCPA Compliance</p>
                        <p className="text-sm text-muted-foreground">California Consumer Privacy Act compliance for US users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Zero-Knowledge Architecture</p>
                        <p className="text-sm text-muted-foreground">Privacy-by-design with minimal data collection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Token Classification */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Token Legal Classification</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Utility Token Classification</h3>
                  <p className="text-muted-foreground mb-3">
                    G2G tokens are classified as utility tokens providing access to governance rights and 
                    platform features. They are not securities under applicable laws.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Primary Functions:</p>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>• Governance voting rights</li>
                        <li>• Access to G-RADE assessments</li>
                        <li>• Platform feature unlocking</li>
                        <li>• Staking rewards participation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Legal Opinions:</p>
                      <ul className="mt-2 space-y-1 text-muted-foreground">
                        <li>• Swiss legal opinion (Lenz & Staehelin)</li>
                        <li>• US legal analysis (Cooley LLP)</li>
                        <li>• EU regulatory assessment (Bird & Bird)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Governance Legal Structure */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">DAO Governance Legal Structure</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Foundation Structure</h3>
                    <p className="text-muted-foreground mb-4">
                      The G2G Foundation serves as the legal entity responsible for protocol development, 
                      treasury management, and ensuring compliance with applicable regulations.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Swiss Foundation Council oversight
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Independent board of directors
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Annual financial audits
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        Regulatory compliance monitoring
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">On-Chain Governance</h3>
                    <p className="text-muted-foreground mb-4">
                      Smart contracts govern day-to-day operations while maintaining legal compliance 
                      through automated checks and balances.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        Multi-signature treasury controls
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        Automated compliance checks
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        Transparent proposal process
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        Immutable governance records
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Documentation */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Legal Documentation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Public Documents</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Terms of Service</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Privacy Policy</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Token Purchase Agreement</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Governance Constitution</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal Opinions & Audits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Swiss Legal Opinion</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">US Securities Analysis</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Smart Contract Audit</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-sm">Annual Compliance Report</span>
                      <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">View PDF</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-8 bg-red-50 dark:bg-red-950 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-600 dark:text-red-400">
                <AlertTriangle className="w-6 h-6" />
                Risk Factors & Disclaimers
              </h2>
              <div className="space-y-4 text-red-800 dark:text-red-200">
                <div>
                  <h3 className="font-semibold mb-2">Regulatory Risk</h3>
                  <p className="text-sm">
                    Cryptocurrency and DAO regulations are evolving rapidly. Changes in laws or regulations 
                    could impact the operation, utility, or value of G2G tokens.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technology Risk</h3>
                  <p className="text-sm">
                    Blockchain technology and smart contracts carry inherent risks including potential bugs, 
                    vulnerabilities, or network failures that could affect platform functionality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Market Risk</h3>
                  <p className="text-sm">
                    Token values may fluctuate significantly due to market conditions, adoption rates, 
                    and other factors beyond the control of the G2G Foundation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Governance Risk</h3>
                  <p className="text-sm">
                    Decentralized governance decisions may not always align with individual participant 
                    interests and could impact platform development or token utility.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Team */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Legal Advisory Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold">
                    LS
                  </div>
                  <h3 className="font-semibold mb-1">Lenz & Staehelin</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Swiss Legal Counsel</p>
                  <p className="text-xs text-muted-foreground">Leading Swiss law firm specializing in blockchain and fintech</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold">
                    CL
                  </div>
                  <h3 className="font-semibold mb-1">Cooley LLP</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-2">US Securities Counsel</p>
                  <p className="text-xs text-muted-foreground">Premier technology law firm with extensive crypto expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold">
                    BB
                  </div>
                  <h3 className="font-semibold mb-1">Bird & Bird</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">EU Regulatory Counsel</p>
                  <p className="text-xs text-muted-foreground">International firm with strong EU regulatory practice</p>
                </div>
              </div>
            </div>

            {/* Geographic Compliance */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-600" />
                Geographic Compliance Status
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-green-600 dark:text-green-400">Permitted Jurisdictions</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Switzerland</span>
                      <span className="text-green-600">✓ Fully Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span>European Union</span>
                      <span className="text-green-600">✓ GDPR Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span>United Kingdom</span>
                      <span className="text-green-600">✓ FCA Registered</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Canada</span>
                      <span className="text-green-600">✓ CSA Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Singapore</span>
                      <span className="text-green-600">✓ MAS Approved</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-orange-600 dark:text-orange-400">Restricted Jurisdictions</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>United States</span>
                      <span className="text-orange-600">⚠ Accredited Only</span>
                    </div>
                    <div className="flex justify-between">
                      <span>China</span>
                      <span className="text-red-600">✗ Restricted</span>
                    </div>
                    <div className="flex justify-between">
                      <span>North Korea</span>
                      <span className="text-red-600">✗ Sanctioned</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Iran</span>
                      <span className="text-red-600">✗ Sanctioned</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cuba</span>
                      <span className="text-red-600">✗ Sanctioned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Legal Team */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Legal Questions?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                For specific legal questions or compliance inquiries, please contact our legal team directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  legal@g2gdao.com
                </button>
                <Link 
                  to="/compliance" 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Compliance Center
                </Link>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Download Legal Pack
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloatingTokenWidget />
    </div>
  );
};

export default LegalFramework;