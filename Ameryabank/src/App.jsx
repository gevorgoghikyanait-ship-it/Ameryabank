import React from 'react';
import Header from './components/Header/header';
import ServicesSection from './components/ServicesSection';
import EcosystemSection from './components/EcosystemSection';
import OnlineActionsSection from './components/OnlineActionsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesSection />
      <EcosystemSection />
      <OnlineActionsSection />
      <Footer />
    </div>
  );
}

export default App;