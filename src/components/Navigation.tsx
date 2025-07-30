import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="relative z-10 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="rekt-title text-primary">REKT.MOLECULE</h1>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="terminal-text hover:text-primary transition-colors">NEWS</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">RESEARCH</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">PROJECTS</a>
              <a href="#" className="terminal-text hover:text-primary transition-colors">DEFI</a>
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
            <Button className="md:hidden" variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;