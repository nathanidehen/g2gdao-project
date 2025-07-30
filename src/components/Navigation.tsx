import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  isVisible: boolean;
  onClose: () => void;
}

const Navigation = ({ isVisible, onClose }: NavigationProps) => {
  if (!isVisible) return null;

  return (
    <nav className="relative z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 pr-[440px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="terminal-text hover:text-primary transition-colors">WHITEPAPER</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">TEAM</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">TOKENOMICS</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">DEVELOPERS</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">COMMUNITY</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-muted rounded-md px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm font-mono"
              />
            </div>
            <ThemeToggle />
            <Button variant="outline" className="font-mono">CONNECT</Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;