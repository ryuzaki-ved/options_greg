import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 -right-[30%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-[20%] -left-[30%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-purple-500/10 to-teal-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay with animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Advanced Options Analytics for 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 ml-2 animate-gradient">
                Smart Traders
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8 animate-fade-in-delayed">
              Unlock powerful insights with real-time data visualization and advanced analytics to make informed trading decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/20 animate-slide-up">
                Get Started Now
              </button>
              <button className="group px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all duration-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
                  View Live Demo
                  <ArrowUpRight className="ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" size={18} />
                </span>
              </button>
            </div>
          </div>
          
          {/* Market highlights */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {marketData.map((item, index) => (
              <div 
                key={index}
                className="relative p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden group hover:bg-slate-800/60 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <h3 className="text-lg font-semibold text-white chart-value" style={{ animationDelay: `${(index * 0.2) + 0.8}s` }}>
                      {item.value}
                    </h3>
                  </div>
                  <span className={`flex items-center chart-value ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`} style={{ animationDelay: `${(index * 0.2 + 0.2) + 0.8}s` }}>
                    {item.change > 0 ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                    <span className="ml-1">{Math.abs(item.change)}%</span>
                  </span>
                </div>
                
                <div className="h-16 w-full relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d={item.chartPath}
                      fill="none"
                      stroke={item.change > 0 ? "#10b981" : "#ef4444"}
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      className="chart-line"
                      style={{ animationDelay: `${(index * 0.2 + 0.4) + 0.8}s` }}
                    />
                  </svg>
                </div>
                
                {/* Hover effect - glowing border */}
                <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-teal-500/30 transition-colors duration-300"></div>
                
                {/* Hover effect - gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sample market data with more dynamic SVG paths
const marketData = [
  {
    label: "Nifty Options Flow",
    value: "₹1,847 Cr",
    change: 2.8,
    chartPath: "M0,15 C20,10 30,20 40,15 S60,5 70,10 S80,20 90,15 L100,12"
  },
  {
    label: "India VIX",
    value: "14.25",
    change: -3.2,
    chartPath: "M0,10 C15,20 25,5 45,15 S60,8 75,18 S85,5 100,15"
  },
  {
    label: "Bank Nifty PCR",
    value: "0.92",
    change: 1.5,
    chartPath: "M0,15 C10,5 30,20 50,10 S70,15 80,5 S90,15 100,10"
  }
];

export default Hero;