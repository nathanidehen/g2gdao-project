import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vote, Users, FileText, Clock, CheckCircle, XCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const activeProposals = [
  {
    id: "G2G-001",
    title: "Enable Cross-Chain Identity Verification",
    description: "Implement multi-chain identity verification across Ethereum, Polygon, and Arbitrum networks",
    type: "Protocol Upgrade",
    status: "Active",
    votesFor: 1247,
    votesAgainst: 198,
    quorum: "67%",
    timeLeft: "3 days",
    requiredVotes: 1500
  },
  {
    id: "G2G-002", 
    title: "Treasury Allocation for Patent Acquisition",
    description: "Allocate €500K from DAO treasury for acquiring additional Web3 identity patents",
    type: "Treasury",
    status: "Active",
    votesFor: 892,
    votesAgainst: 156,
    quorum: "45%",
    timeLeft: "6 days",
    requiredVotes: 1200
  },
  {
    id: "G2G-003",
    title: "Strategic Partnership with Enterprise Client",
    description: "Approve partnership agreement with Fortune 500 company for enterprise identity integration",
    type: "Partnership",
    status: "Passed",
    votesFor: 1689,
    votesAgainst: 234,
    quorum: "78%",
    timeLeft: "Ended",
    requiredVotes: 1500
  }
];

const governanceStats = [
  { label: "Total Token Holders", value: "2,847", icon: Users },
  { label: "Active Voters", value: "1,923", icon: Vote },
  { label: "Proposals Submitted", value: "23", icon: FileText },
  { label: "Avg Participation", value: "67.5%", icon: CheckCircle }
];

const Governance = () => {
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

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DAO <span className="text-primary">Governance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participate in G2G DAO governance through token-based voting. Shape the future of Web3 identity infrastructure through community-driven decisions.
            </p>
          </div>

          {/* Governance Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {governanceStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary font-mono mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* How Governance Works */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">How G2G DAO Governance Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Proposal Submission</h3>
                <p className="text-muted-foreground">
                  Any G2G token holder can submit governance proposals for protocol upgrades, treasury allocations, or strategic decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Discussion</h3>
                <p className="text-muted-foreground">
                  Proposals enter a 7-day discussion period where community members can debate, suggest modifications, and ask questions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Token-Based Voting</h3>
                <p className="text-muted-foreground">
                  G2G token holders vote using their tokens. Voting power is proportional to token holdings with a minimum quorum requirement.
                </p>
              </div>
            </div>
          </Card>

          {/* Active Proposals */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Active Proposals</h2>
              <Button className="bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Submit Proposal
              </Button>
            </div>

            <div className="space-y-6">
              {activeProposals.map((proposal, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="font-mono">
                          {proposal.id}
                        </Badge>
                        <Badge 
                          className={
                            proposal.status === 'Active' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                            proposal.status === 'Passed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                          }
                        >
                          {proposal.status}
                        </Badge>
                        <Badge variant="secondary">
                          {proposal.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{proposal.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{proposal.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>{proposal.timeLeft}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Quorum: {proposal.quorum}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Votes For</span>
                        <span className="font-mono font-bold text-green-600">{proposal.votesFor.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(proposal.votesFor / proposal.requiredVotes) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Votes Against</span>
                        <span className="font-mono font-bold text-red-600">{proposal.votesAgainst.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${(proposal.votesAgainst / proposal.requiredVotes) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {proposal.status === 'Active' && (
                      <>
                        <Button 
                          size="sm"
                          className="bg-green-600 text-white hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Vote For
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Vote Against
                        </Button>
                      </>
                    )}
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Governance Requirements */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Governance Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Vote className="h-6 w-6 mr-2 text-primary" />
                  Voting Requirements
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Minimum 100 G2G tokens to vote</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tokens must be held for 7+ days before voting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Voting power proportional to token holdings</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Minimum 30% quorum for proposal to pass</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Proposal Submission
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Minimum 1,000 G2G tokens to submit proposals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Detailed technical specification required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>7-day discussion period before voting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>14-day voting period for active proposals</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <FloatingTokenWidget />
    </div>
  );
};

export default Governance;