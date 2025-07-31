import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, FileText, Users, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Compliance = () => {
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
                COMPLIANCE FRAMEWORK
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive compliance program ensuring regulatory adherence and user protection
              </p>
            </div>

            {/* Compliance Overview */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Regulatory Compliance</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">KYC Verifications</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Lock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Transaction Monitoring</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Eye className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Audit Reports</div>
              </div>
            </div>

            {/* KYC/AML Framework */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                KYC/AML Program
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Know Your Customer (KYC)</h3>
                  <div className="space-y-4">
                    <div className="border border-border rounded p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Identity Verification
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Multi-tier verification process using government-issued ID, biometric verification, and address confirmation.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        • Government ID verification • Liveness detection • Address proof • Sanctions screening
                      </div>
                    </div>
                    <div className="border border-border rounded p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Enhanced Due Diligence
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Additional verification for high-risk customers including PEP screening and source of funds verification.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        • PEP database screening • Source of wealth verification • Enhanced monitoring • Regular reviews
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-green-600 dark:text-green-400">Anti-Money Laundering (AML)</h3>
                  <div className="space-y-4">
                    <div className="border border-border rounded p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Transaction Monitoring
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Real-time monitoring of all transactions using advanced analytics and machine learning algorithms.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        • Pattern recognition • Risk scoring • Unusual activity alerts • Blockchain analysis
                      </div>
                    </div>
                    <div className="border border-border rounded p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Suspicious Activity Reporting
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comprehensive SAR program with trained compliance officers and regulatory filing procedures.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        • SAR filing procedures • Regulatory reporting • Investigation protocols • Record keeping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Protection & Privacy */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6 text-purple-600" />
                Data Protection & Privacy
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">GDPR Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Full compliance with EU General Data Protection Regulation including data minimization and user rights.
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">CCPA Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    California Consumer Privacy Act compliance with transparent data practices and user control.
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950">
                  <Lock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Data Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced encryption, secure storage, and access controls protecting all personal data.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Privacy by Design</h3>
                <p className="text-sm text-muted-foreground">
                  Our systems are built with privacy as a fundamental principle, implementing zero-knowledge proofs 
                  for identity verification and minimal data collection practices.
                </p>
              </div>
            </div>

            {/* Regulatory Partnerships */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Regulatory Partnerships</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Compliance Partners</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <div className="font-medium text-sm">Chainalysis</div>
                        <div className="text-xs text-muted-foreground">Blockchain analytics & AML monitoring</div>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <div className="font-medium text-sm">Jumio</div>
                        <div className="text-xs text-muted-foreground">KYC & identity verification services</div>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded">
                      <div>
                        <div className="font-medium text-sm">Elliptic</div>
                        <div className="text-xs text-muted-foreground">Cryptocurrency compliance & investigation</div>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal Advisors</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-border rounded">
                      <div className="font-medium text-sm mb-1">MME Legal</div>
                      <div className="text-xs text-muted-foreground mb-2">Swiss blockchain & crypto law specialists</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">Primary Swiss counsel</div>
                    </div>
                    <div className="p-3 border border-border rounded">
                      <div className="font-medium text-sm mb-1">Perkins Coie LLP</div>
                      <div className="text-xs text-muted-foreground mb-2">US securities & regulatory law</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">US regulatory counsel</div>
                    </div>
                    <div className="p-3 border border-border rounded">
                      <div className="font-medium text-sm mb-1">Ashurst LLP</div>
                      <div className="text-xs text-muted-foreground mb-2">EU regulatory & compliance law</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">EU legal counsel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Procedures */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Compliance Procedures</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 text-orange-600 dark:text-orange-400">Onboarding Process</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <div className="font-medium text-sm">Identity Verification</div>
                          <div className="text-xs text-muted-foreground">Government ID upload and biometric verification</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <div className="font-medium text-sm">Risk Assessment</div>
                          <div className="text-xs text-muted-foreground">Automated risk scoring and classification</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <div className="font-medium text-sm">Sanctions Screening</div>
                          <div className="text-xs text-muted-foreground">Global sanctions and PEP database checks</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                        <div>
                          <div className="font-medium text-sm">Account Approval</div>
                          <div className="text-xs text-muted-foreground">Manual review for high-risk cases</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-red-600 dark:text-red-400">Ongoing Monitoring</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <div className="font-medium text-sm">Transaction Analysis</div>
                          <div className="text-xs text-muted-foreground">Real-time monitoring for suspicious patterns</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <div className="font-medium text-sm">Periodic Reviews</div>
                          <div className="text-xs text-muted-foreground">Regular customer data updates and verifications</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <div className="font-medium text-sm">Alert Investigation</div>
                          <div className="text-xs text-muted-foreground">Trained analysts review flagged activities</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                        <div>
                          <div className="font-medium text-sm">Regulatory Reporting</div>
                          <div className="text-xs text-muted-foreground">SAR filings and regulatory notifications</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit & Reporting */}
            <div className="border border-border rounded-lg p-8 bg-card mb-8">
              <h2 className="text-2xl font-bold mb-6">Audit & Reporting</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                  <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">External Audits</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Annual compliance audits by independent third-party auditors specialized in cryptocurrency regulations.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Latest audit: December 2023 • Next audit: December 2024
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950">
                  <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">Regulatory Reports</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Regular reporting to regulatory authorities in all operating jurisdictions with full transparency.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Quarterly filings • Annual reports • Incident notifications
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
                  <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Public Transparency</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Public disclosure of compliance metrics and audit summaries to maintain community trust.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Monthly metrics • Audit summaries • Compliance updates
                  </div>
                </div>
              </div>
            </div>

            {/* Restricted Jurisdictions */}
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Restricted Jurisdictions
              </h2>
              <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                G2G DAO services are not available in certain jurisdictions due to regulatory restrictions. 
                Please ensure you are accessing our services from an authorized location.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">Prohibited Countries</h3>
                  <ul className="space-y-1 text-red-700 dark:text-red-300">
                    <li>• North Korea (DPRK)</li>
                    <li>• Iran</li>
                    <li>• Syria</li>
                    <li>• Cuba</li>
                    <li>• Crimea region</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">Restricted Activities</h3>
                  <ul className="space-y-1 text-red-700 dark:text-red-300">
                    <li>• US persons in certain activities</li>
                    <li>• Residents of sanctioned regions</li>
                    <li>• Entities on sanctions lists</li>
                    <li>• High-risk business activities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Compliance */}
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Compliance Support
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Have questions about our compliance procedures or need assistance with verification? 
                Our compliance team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Contact Compliance Team
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Download Compliance Guide
                </button>
                <Link 
                  to="/legal-framework" 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Legal Framework
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

export default Compliance;