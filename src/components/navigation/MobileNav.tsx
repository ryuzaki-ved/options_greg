import { FC } from 'react';
import { ChevronRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const mainLinks = [
    { name: 'Options Chain', href: '#' },
    { name: 'Orderflow / Bookmap', href: '#' },
    { name: 'Tick View', href: '#' },
  ];

  const additionalLinks = [
    { name: 'Algo Map', href: '#' },
    { name: 'Position Map', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Help & Support', href: '#' }
  ];

  return (
    <div 
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <nav className="relative z-50 w-4/5 max-w-sm h-full bg-slate-900 shadow-xl overflow-y-auto">
        <div className="px-6 py-8 pb-32">
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Main Navigation
            </h3>
            <ul className="space-y-1">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center justify-between py-2 text-base font-medium text-white hover:bg-slate-800/60 rounded-md px-3 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Additional Options
            </h3>
            <ul className="space-y-1">
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center justify-between py-2 text-base font-medium text-white hover:bg-slate-800/60 rounded-md px-3 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-10 pt-6 border-t border-slate-700/50">
            <button className="w-full py-2.5 px-4 mb-3 bg-slate-800 text-white rounded-md text-sm font-medium hover:bg-slate-700 transition-colors duration-200">
              Sign In
            </button>
            <button className="w-full py-2.5 px-4 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-500 transition-colors duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;