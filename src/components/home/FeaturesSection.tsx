import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  BarChart3, LineChart, TrendingUp, Activity, 
  Layers, Zap, RefreshCw, PieChart
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, index, isInView }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}) => {
  return (
    <div 
      className={`relative p-6 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-white/5 transition-all duration-500 delay-${index * 100} 
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="absolute -top-3 -left-3 p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg shadow-lg">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mt-4 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const features = [
    {
      icon: BarChart3,
      title: "Options Chain Analysis",
      description: "Advanced visualization of options chains with volume, open interest, and implied volatility indicators."
    },
    {
      icon: LineChart,
      title: "Orderflow Analytics",
      description: "Real-time order flow tracking with heat maps to identify large institutional trades and market sentiment."
    },
    {
      icon: Activity,
      title: "Tick by Tick Data",
      description: "Microsecond precision tick data helps you spot market trends before they develop fully."
    },
    {
      icon: Layers,
      title: "Market Depth Visualization",
      description: "Interactive visualizations showing the full depth of market orders and liquidity levels."
    },
    {
      icon: Zap,
      title: "Ultra Low Latency",
      description: "Sub-millisecond data delivery ensures you never miss a trading opportunity."
    },
    {
      icon: RefreshCw,
      title: "Real-Time Alerts",
      description: "Custom alerts based on unusual options activity, volume spikes, or price movements."
    },
    {
      icon: TrendingUp,
      title: "Strategy Backtesting",
      description: "Test your trading strategies against historical data to optimize performance."
    },
    {
      icon: PieChart,
      title: "Position Risk Analysis",
      description: "Comprehensive risk metrics for your option positions including Greeks and scenario analysis."
    }
  ];

  return (
    <section ref={ref} className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Powerful Features for <span className="text-teal-400">Options Traders</span>
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our comprehensive suite of tools gives you an edge in the options market with advanced analytics and visualization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;