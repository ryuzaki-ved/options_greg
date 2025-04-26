import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const OptionsChainPreview = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('calls');
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  // Options chain dummy data
  const options = [
    { strike: 420, callVolume: 12450, callOI: 25600, callIV: 0.42, putVolume: 8720, putOI: 32100, putIV: 0.45 },
    { strike: 425, callVolume: 18900, callOI: 19200, callIV: 0.39, putVolume: 7650, putOI: 21800, putIV: 0.41 },
    { strike: 430, callVolume: 24350, callOI: 31700, callIV: 0.37, putVolume: 5430, putOI: 18400, putIV: 0.38 },
    { strike: 435, callVolume: 9800, callOI: 15400, callIV: 0.35, putVolume: 4380, putOI: 12600, putIV: 0.36 },
    { strike: 440, callVolume: 7200, callOI: 12100, callIV: 0.33, putVolume: 9680, putOI: 24300, putIV: 0.38 },
  ];

  // Generate widths for volume visualization
  const maxCallVolume = Math.max(...options.map(o => o.callVolume));
  const maxPutVolume = Math.max(...options.map(o => o.putVolume));

  const getCallVolumeWidth = (volume: number) => `${(volume / maxCallVolume) * 100}%`;
  const getPutVolumeWidth = (volume: number) => `${(volume / maxPutVolume) * 100}%`;

  return (
    <section ref={ref} className="relative py-20 bg-slate-800/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Visualize the <span className="text-teal-400">Options Chain</span> Like Never Before
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Get unprecedented clarity with our interactive options chain visualization. Spot unusual activity and potential market movers at a glance.
            </p>
          </div>
          
          {/* Options Chain Preview */}
          <div className={`bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden shadow-xl transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Header bar */}
            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-white font-medium">Nifty Options Chain - Expiry: Jun 21, 2025</div>
              <div className="text-gray-400 text-sm">Last Update: 12:32:45 PM</div>
            </div>
            
            {/* Tab navigation */}
            <div className="flex border-b border-slate-700/50">
              <button 
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'calls' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('calls')}
              >
                Calls
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'puts' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('puts')}
              >
                Puts
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${activeTab === 'combined' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab('combined')}
              >
                Combined View
              </button>
            </div>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/60">
                    {activeTab !== 'puts' && (
                      <>
                        <th className="px-4 py-3 text-left text-gray-400 font-medium">Call Volume</th>
                        <th className="px-4 py-3 text-left text-gray-400 font-medium">Open Interest</th>
                        <th className="px-4 py-3 text-left text-gray-400 font-medium">IV</th>
                      </>
                    )}
                    <th className="px-4 py-3 text-center text-white font-medium">Strike</th>
                    {activeTab !== 'calls' && (
                      <>
                        <th className="px-4 py-3 text-right text-gray-400 font-medium">IV</th>
                        <th className="px-4 py-3 text-right text-gray-400 font-medium">Open Interest</th>
                        <th className="px-4 py-3 text-right text-gray-400 font-medium">Put Volume</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {options.map((option, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-slate-700/30 transition-colors duration-200 ${hoveredRow === index ? 'bg-slate-700/30' : 'hover:bg-slate-800/50'}`}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      {activeTab !== 'puts' && (
                        <>
                          <td className="px-4 py-4 relative">
                            <div className="flex items-center">
                              <div 
                                className={`absolute left-0 top-0 bottom-0 bg-green-500/20 animate-bar-width`}
                                style={{ 
                                  '--final-width': getCallVolumeWidth(option.callVolume),
                                  animationDelay: isInView ? `${index * 0.1 + 0.5}s` : '0s',
                                  width: isInView ? getCallVolumeWidth(option.callVolume) : '0%'
                                } as React.CSSProperties}
                              ></div>
                              <span className="relative z-10 text-green-400 font-medium">{option.callVolume.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-gray-300">{option.callOI.toLocaleString()}</td>
                          <td className="px-4 py-4 text-teal-400">{option.callIV.toFixed(2)}</td>
                        </>
                      )}
                      <td className={`px-4 py-4 text-center font-bold ${
                        index === 2 ? 'text-white bg-slate-700/30 border-x border-teal-500/30' : 'text-gray-300'
                      }`}>
                        {option.strike.toFixed(2)}
                      </td>
                      {activeTab !== 'calls' && (
                        <>
                          <td className="px-4 py-4 text-right text-teal-400">{option.putIV.toFixed(2)}</td>
                          <td className="px-4 py-4 text-right text-gray-300">{option.putOI.toLocaleString()}</td>
                          <td className="px-4 py-4 text-right relative">
                            <div className="flex items-center justify-end">
                              <div 
                                className={`absolute right-0 top-0 bottom-0 bg-red-500/20 animate-bar-width`}
                                style={{ 
                                  '--final-width': getPutVolumeWidth(option.putVolume),
                                  animationDelay: isInView ? `${index * 0.1 + 0.5}s` : '0s',
                                  width: isInView ? getPutVolumeWidth(option.putVolume) : '0%'
                                } as React.CSSProperties}
                              ></div>
                              <span className="relative z-10 text-red-400 font-medium">{option.putVolume.toLocaleString()}</span>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Footer */}
            <div className="bg-slate-800/60 px-6 py-3 text-right">
              <button className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-200">
                View Full Options Chain →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsChainPreview;