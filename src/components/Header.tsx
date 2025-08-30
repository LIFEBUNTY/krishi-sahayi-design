import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Languages, Menu, X } from 'lucide-react';
import krishiLogo from '@/assets/krishi-logo.jpg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ml' | 'en'>('ml');
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ml' ? 'en' : 'ml');
  };

  const navItems = [
    { path: '/', label: { en: 'Home', ml: 'ഹോം' } },
    { path: '/ask', label: { en: 'Ask Query', ml: 'ചോദ്യം ചോദിക്കുക' } },
    { path: '/about', label: { en: 'About', ml: 'കുറിച്ച്' } },
    { path: '/contact', label: { en: 'Contact', ml: 'ബന്ധപ്പെടുക' } },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and App Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={krishiLogo} alt="Krishi Logo" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold text-primary text-lg leading-tight">
                {language === 'ml' ? 'ഡിജിറ്റൽ കൃഷി ഓഫീസർ' : 'Digital Krishi Officer'}
              </span>
              <span className="text-xs text-muted-foreground">
                {language === 'ml' ? 'AI കാർഷിക സഹായി' : 'AI Farming Assistant'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label[language]}
              </Link>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-4"
            >
              <Languages className="w-4 h-4 mr-2" />
              {language === 'ml' ? 'English' : 'മലയാളം'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
            >
              <Languages className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[language]}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};