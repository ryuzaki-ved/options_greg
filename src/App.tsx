import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import FeaturesSection from './components/home/FeaturesSection';
import OptionsChainPreview from './components/home/OptionsChainPreview';
import CTASection from './components/home/CTASection';

function App() {
  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      <OptionsChainPreview />
      <CTASection />
    </Layout>
  );
}

export default App;