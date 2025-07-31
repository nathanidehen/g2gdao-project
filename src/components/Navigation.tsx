import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  isVisible: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isVisible, onClose }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTokenomicsOpen, setIsTokenomicsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tokenomicsRef.current && !tokenomicsRef.current.contains(event.target as Node)) {
        setIsTokenomicsOpen(false);
      }
      if (teamRef.current && !teamRef.current.contains(event.target as Node)) {
        setIsTeamOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleTokenomicsToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTokenomicsOpen(!isTokenomicsOpen);
    setIsTeamOpen(false);
  };

  const handleTeamToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTeamOpen(!isTeamOpen);
    setIsTokenomicsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Empty space for left side */}
          <div></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/whitepaper" 
              className="text-foreground hover:text-blue-600 transition-colors font-medium"
            >
              WHITEPAPER
            </Link>

            {/* TEAM Dropdown */}
            <div className="relative" ref={teamRef}>
              <button
                onClick={handleTeamToggle}
                className="flex items-center space-x-1 text-foreground hover:text-blue-600 transition-colors font-medium"
              >
                <span>TEAM</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTeamOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTeamOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/our-mission" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Our Mission
                  </Link>
                  <Link 
                    to="/team" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Team
                  </Link>
                  <Link 
                    to="/legal-framework" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Legal Framework
                  </Link>
                  <Link 
                    to="/compliance" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Compliance
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* TOKENOMICS Dropdown */}
            <div className="relative" ref={tokenomicsRef}>
              <button
                onClick={handleTokenomicsToggle}
                className="flex items-center space-x-1 text-foreground hover:text-blue-600 transition-colors font-medium"
              >
                <span>TOKENOMICS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTokenomicsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTokenomicsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/token-overview" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Token Overview
                  </Link>
                  <Link 
                    to="/token-metrics" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Token Metrics
                  </Link>
                  <Link 
                    to="/how-to-buy-g2g" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    How to Buy G2G
                  </Link>
                  <Link 
                    to="/governance" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Governance
                  </Link>
                  <Link 
                    to="/roadmap" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Roadmap
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/developers" 
              className="text-foreground hover:text-blue-600 transition-colors font-medium"
            >
              DEVELOPERS
            </Link>
            <Link 
              to="/community" 
              className="text-foreground hover:text-blue-600 transition-colors font-medium"
            >
              COMMUNITY
            </Link>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/whitepaper" 
                className="text-foreground hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={closeMobileMenu}
              >
                WHITEPAPER
              </Link>

              {/* Mobile Team Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsTeamOpen(!isTeamOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-blue-600 transition-colors font-medium"
                >
                  <span>TEAM</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isTeamOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTeamOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/our-mission" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Our Mission
                    </Link>
                    <Link 
                      to="/team" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Team
                    </Link>
                    <Link 
                      to="/legal-framework" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Legal Framework
                    </Link>
                    <Link 
                      to="/compliance" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Compliance
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Tokenomics Dropdown */}
              <div className="px-4 py-2">
                <button
                  onClick={() => setIsTokenomicsOpen(!isTokenomicsOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-blue-600 transition-colors font-medium"
                >
                  <span>TOKENOMICS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isTokenomicsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTokenomicsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/token-overview" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Token Overview
                    </Link>
                    <Link 
                      to="/token-metrics" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Token Metrics
                    </Link>
                    <Link 
                      to="/how-to-buy-g2g" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      How to Buy G2G
                    </Link>
                    <Link 
                      to="/governance" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Governance
                    </Link>
                    <Link 
                      to="/roadmap" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      onClick={closeMobileMenu}
                    >
                      Roadmap
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/developers" 
                className="text-foreground hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={closeMobileMenu}
              >
                DEVELOPERS
              </Link>
              <Link 
                to="/community" 
                className="text-foreground hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={closeMobileMenu}
              >
                COMMUNITY
              </Link>

              <div className="px-4 py-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;