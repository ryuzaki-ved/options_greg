import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Options Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of professional traders who are already using our platform to gain an edge in the market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/20">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all duration-300">
              <span>Schedule a Demo</span>
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
          
          {/* Testimonial */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/5 p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-gray-300 italic mb-6">
              "This platform completely changed my options trading strategy. The real-time analytics and visualizations help me spot opportunities I would have missed otherwise. My win rate has increased by 34% since I started using it."
            </p>
            <div>
              <p className="text-white font-medium">Michael Thompson</p>
              <p className="text-gray-400 text-sm">Professional Options Trader, Chicago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;