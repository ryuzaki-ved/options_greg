import { Logo } from '../ui/Logo';
import { Facebook, Twitter, Linkedin, Github as GitHub, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Advanced options market analysis platform providing real-time data and analytics for professional traders.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors duration-200">
                <GitHub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Options Chain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Orderflow / Bookmap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Tick View</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Algo Map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Position Map</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 OptionsPro. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="inline-flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors duration-200">
              <Mail size={16} />
              <span>support@optionspro.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;