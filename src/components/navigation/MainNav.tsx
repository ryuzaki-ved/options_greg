import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const MainNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navItems = [
    { name: 'Options Chain', href: '#' },
    { name: 'Orderflow / Bookmap', href: '#' },
    { name: 'Tick View', href: '#' },
    { 
      name: 'More', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Algo Map', href: '#' },
        { name: 'Position Map', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Documentation', href: '#' }
      ] 
    }
  ];

  return (
    <nav className="ml-8">
      <ul className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <li 
            key={index} 
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a 
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown size={16} className="ml-1 transition-transform duration-300" />
              )}
            </a>
            
            {/* Animated underline */}
            <div 
              className={`absolute -bottom-1 left-0 h-[2px] bg-teal-500 transition-all duration-300 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}
            />
            
            {/* Dropdown */}
            {item.hasDropdown && (
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <ul>
                  {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <a 
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;