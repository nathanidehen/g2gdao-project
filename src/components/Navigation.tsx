import { Search, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

interface NavigationProps {
  isVisible: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isVisible, onClose }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTokenomicsOpen, setIsTokenomicsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Simple theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

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

  // Always render LOGIN button, even when main nav is hidden
  const LoginButton = () => (
    <Button 
      variant="outline" 
      className="font-mono"
      onClick={() => window.open('https://investor.g2gdao.com/', '_blank')}
    >
      LOGIN
    </Button>
  );

  // Theme toggle component
  const ThemeToggle = () => (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  );

  // If navigation is not visible, show only LOGIN button and theme toggle
  if (!isVisible) {
    return (
      <div className="fixed top-20 right-4 z-40 flex items-center space-x-2">
        <ThemeToggle />
        <LoginButton />
      </div>
    );
  }

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-16 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl py-6 z-[9999] min-h-[400px]">
                  <Link 
                    to="/our-mission" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Our Mission
                  </Link>
                  <Link 
                    to="/team" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Team
                  </Link>
                  <Link 
                    to="/legal-framework" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Legal Framework
                  </Link>
                  <Link 
                    to="/compliance" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTeamOpen(false)}
                  >
                    Compliance
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors"
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl py-6 z-[9999] min-h-[450px]">
                  <Link 
                    to="/token-overview" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Token Overview
                  </Link>
                  <Link 
                    to="/token-metrics" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Token Metrics
                  </Link>
                  <Link 
                    to="/how-to-buy-g2g" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    How to Buy G2G
                  </Link>
                  <Link 
                    to="/governance" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors border-b border-border/50"
                    onClick={() => setIsTokenomicsOpen(false)}
                  >
                    Governance
                  </Link>
                  <Link 
                    to="/roadmap" 
                    className="block px-6 py-6 text-base text-foreground hover:bg-muted transition-colors"
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
            <LoginButton />
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
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Our Mission
                    </Link>
                    <Link 
                      to="/team" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Team
                    </Link>
                    <Link 
                      to="/legal-framework" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Legal Framework
                    </Link>
                    <Link 
                      to="/compliance" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Compliance
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
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
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Token Overview
                    </Link>
                    <Link 
                      to="/token-metrics" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Token Metrics
                    </Link>
                    <Link 
                      to="/how-to-buy-g2g" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      How to Buy G2G
                    </Link>
                    <Link 
                      to="/governance" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={closeMobileMenu}
                    >
                      Governance
                    </Link>
                    <Link 
                      to="/roadmap" 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
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

              {/* Mobile LOGIN Button */}
              <div className="px-4 py-2">
                <LoginButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;