import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  isVisible: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns({});
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Green Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-center text-center">
          <span className="font-mono font-bold text-xs leading-tight">
            EXCLUSIVE OFFER FOR QUALIFIED<br />
            INVESTORS £1.50
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-[52px] left-0 right-0 z-40 bg-background border-b transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left side - empty space where logo used to be */}
            <div></div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                HOME
              </Link>
              
              <Link to="/whitepaper" className="text-foreground hover:text-primary transition-colors">
                WHITEPAPER
              </Link>
              
              {/* TEAM Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('team')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  TEAM
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'team' && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-background border ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link to="/our-mission" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Our Mission</Link>
                      <Link to="/team" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Team</Link>
                      <Link to="/legal-framework" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Legal Framework</Link>
                      <Link to="/compliance" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Compliance</Link>
                      <Link to="/contact" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Contact</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* TOKENOMICS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('tokenomics')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  TOKENOMICS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {openDropdown === 'tokenomics' && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-background border ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link to="/token-overview" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Token Overview</Link>
                      <Link to="/token-metrics" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Token Metrics</Link>
                      <Link to="/how-to-buy" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">How to Buy G2G</Link>
                      <Link to="/governance" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Governance</Link>
                      <Link to="/roadmap" className="block px-4 py-2 text-sm text-foreground hover:bg-muted">Roadmap</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/developers" className="text-foreground hover:text-primary transition-colors">
                DEVELOPERS
              </Link>
              <Link to="/community" className="text-foreground hover:text-primary transition-colors">
                COMMUNITY
              </Link>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                <a href="https://investor.g2gdao.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    LOGIN
                  </Button>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu - PUSHES CONTENT DOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>

              <Link
                to="/whitepaper"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={closeMobileMenu}
              >
                WHITEPAPER
              </Link>

              {/* Mobile TEAM Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('team')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                >
                  TEAM
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${mobileDropdowns.team ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdowns.team && (
                  <div className="pl-4 space-y-1">
                    <Link to="/our-mission" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Our Mission</Link>
                    <Link to="/team" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Team</Link>
                    <Link to="/legal-framework" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Legal Framework</Link>
                    <Link to="/compliance" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Compliance</Link>
                    <Link to="/contact" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Contact</Link>
                  </div>
                )}
              </div>

              {/* Mobile TOKENOMICS Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('tokenomics')}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                >
                  TOKENOMICS
                  <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${mobileDropdowns.tokenomics ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdowns.tokenomics && (
                  <div className="pl-4 space-y-1">
                    <Link to="/token-overview" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Token Overview</Link>
                    <Link to="/token-metrics" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Token Metrics</Link>
                    <Link to="/how-to-buy" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>How to Buy G2G</Link>
                    <Link to="/governance" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Governance</Link>
                    <Link to="/roadmap" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={closeMobileMenu}>Roadmap</Link>
                  </div>
                )}
              </div>

              <Link
                to="/developers"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={closeMobileMenu}
              >
                DEVELOPERS
              </Link>
              <Link
                to="/community"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={closeMobileMenu}
              >
                COMMUNITY
              </Link>

              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://investor.g2gdao.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" onClick={closeMobileMenu}>
                    LOGIN
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;