import { BarChart2 } from 'lucide-react';

export const Logo = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-1.5 rounded">
        <BarChart2 className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        OptionsPro
      </span>
    </a>
  );
};