import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import MobileNav from '../navigation/MobileNav';
import MainNav from '../navigation/MainNav';
import { Logo } from '../ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <MainNav />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-md text-sm font-medium text-white border border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md bg-teal-600 text-sm font-medium text-white hover:bg-teal-500 transition-all duration-300">
              Start Free Trial
            </button>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;