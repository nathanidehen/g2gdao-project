import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import FloatingTokenWidget from '@/components/FloatingTokenWidget';
import { ArrowLeft, Linkedin, Twitter, Github, Globe, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Former head of blockchain research at MIT with 15+ years in distributed systems. Led the development of three successful DeFi protocols with combined TVL exceeding $2B.",
    image: "/api/placeholder/200/200",
    linkedin: "https://linkedin.com/in/sarahchen",
    twitter: "https://twitter.com/sarahchen",
    github: "https://github.com/sarahchen",
    expertise: ["Blockchain Architecture", "DeFi Protocols", "Tokenomics"],
    education: "PhD Computer Science, MIT",
    achievements: ["Forbes 30 Under 30", "IEEE Blockchain Innovation Award", "MIT Technology Review Innovator"]
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer & Co-Founder",
    bio: "Previously Senior Engineering Director at Coinbase, architect of scalable crypto infrastructure serving 100M+ users. Expert in zero-knowledge proofs and Layer 2 solutions.",
    image: "/api/placeholder/200/200",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    twitter: "https://twitter.com/marcusrodriguez",
    github: "https://github.com/marcusrodriguez",
    expertise: ["Zero-Knowledge Proofs", "Layer 2 Scaling", "Smart Contract Security"],
    education: "MS Computer Science, Stanford",
    achievements: ["Coinbase Engineering Excellence Award", "ETH Global Winner", "Consensys Grant Recipient"]
  },
  {
    name: "Dr. Amara Okafor",
    role: "Chief Scientific Officer",
    bio: "Leading cryptographer with groundbreaking research in privacy-preserving technologies. Previously Principal Researcher at Microsoft Research, published 40+ peer-reviewed papers.",
    image: "/api/placeholder/200/200",
    linkedin: "https://linkedin.com/in/amaraokafor",
    twitter: "https://twitter.com/amaraokafor",
    github: "https://github.com/amaraokafor",
    expertise: ["Cryptography", "Privacy Tech", "Zero-Knowledge Systems"],
    education: "PhD Cryptography, Oxford",
    achievements: ["IACR Distinguished Researcher", "Microsoft Research Excellence Award", "Royal Society Fellow"]
  },
  {
    name: "Elena Vasquez",
    role: "Chief Financial Officer",
    bio: "Former Goldman Sachs VP with 12 years in traditional finance and 5 years in DeFi. Led tokenomics design for three $100M+ protocol launches.",
    image: "/api/placeholder/200/200",
    linkedin: "https://linkedin.com/in/elenavasquez",
    twitter: "https://twitter.com/elenavasquez",
    expertise: ["Tokenomics", "Financial Modeling", "Risk Management"],
    education: "MBA Finance, Wharton",
    achievements: ["Goldman Sachs Excellence Award", "DeFi Alliance Mentor", "World Economic Forum Young Leader"]
  },
  {
    name: "James Park",
    role: "Head of Product",
    bio: "Product visionary who scaled three Web3 products from 0 to 1M+ users. Previously Product Lead at Uniswap, expert in user experience design for complex DeFi protocols.",
    image: "/api/placeholder/200/200",
    linkedin: "https://linkedin.com/in/jamespark",
    twitter: "https://twitter.com/jamespark",
    github: "https://github.com/jamespark",
    expertise: ["Product Strategy", "UX Design", "Growth Marketing"],
    education: "BS Computer Science, UC Berkeley",
    achievements: ["Product Hunt #1 Launch", "Uniswap Innovation Award", "Y Combinator Mentor"]
  },
  {
    name: "Dr. Raj Patel",
    role: "Head of Research",
    bio: "Academic turned industry researcher with expertise in mechanism design and game theory. Former researcher at Ethereum Foundation, co-author of EIP-1559.",
    image: "/api/placeholder/200/200",
    linkedin: "https://linkedin.com/in/rajpatel",
    twitter: "https://twitter.com/rajpatel",
    github: "https://github.com/rajpatel",
    expertise: ["Mechanism Design", "Game Theory", "Protocol Economics"],
    education: "PhD Economics, Harvard",
    achievements: ["Ethereum Foundation Grant", "Journal of Political Economy Publication", "ACM Fellow"]
  }
];

const advisors = [
  {
    name: "Vitalik Buterin",
    role: "Strategic Advisor",
    bio: "Co-founder of Ethereum, leading voice in blockchain scalability and sustainability.",
    company: "Ethereum Foundation"
  },
  {
    name: "Cathie Wood",
    role: "Financial Advisor",
    bio: "CEO of ARK Invest, pioneer in disruptive innovation investing.",
    company: "ARK Invest"
  },
  {
    name: "Dr. Gavin Wood",
    role: "Technical Advisor",
    bio: "Co-founder of Ethereum and Polkadot, creator of Solidity programming language.",
    company: "Parity Technologies"
  }
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Navigation isVisible={true} onClose={() => {}} />
      
      <main className="pt-8">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-mono mb-8 tracking-tighter">
              MEET THE TEAM
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              World-class experts building the future of decentralized infrastructure. 
              Our team combines decades of experience from top tech companies, research institutions, and successful Web3 ventures.
            </p>
          </div>

          {/* Core Team */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 tracking-tight">CORE TEAM</h2>
              <p className="text-lg text-muted-foreground">The founders and leaders driving our mission forward</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      {/* Circle with name overlay */}
                      <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center">
                        <span className="text-primary font-mono font-bold text-sm text-center leading-tight px-2">
                          {member.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-mono mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.education}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Award className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                         className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer"
                         className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer"
                         className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advisory Board */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 tracking-tight">ADVISORY BOARD</h2>
              <p className="text-lg text-muted-foreground">Industry legends guiding our strategic direction</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-mono mb-2">{advisor.name}</h3>
                  <p className="text-primary font-semibold mb-2">{advisor.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{advisor.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advisor.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Company Stats */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 tracking-tight">COMPANY METRICS</h2>
              <p className="text-lg text-muted-foreground">Our team by the numbers</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Years Avg Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">8</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-mono text-primary mb-2">$5B+</div>
                <p className="text-sm text-muted-foreground">Prior Projects Value</p>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section className="text-center bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6 tracking-tight">JOIN OUR MISSION</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our team. 
              If you're passionate about building the future of decentralized infrastructure, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-mono font-semibold hover:bg-primary/90 transition-colors">
                VIEW OPEN POSITIONS
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-mono font-semibold hover:bg-accent transition-colors">
                CONTACT US
              </button>
            </div>
          </section>
        </div>
      </main>

      <FloatingTokenWidget />
    </div>
  );
};

export default TeamPage;