import React from 'react';
import Header from './components/Header/header';
import ServicesSection from './components/ServicesSection';
import EcosystemSection from './components/EcosystemSection'; // Ներմուծում

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesSection />
      <EcosystemSection /> {/* Այստեղ */}
    </div>
  );
}

export default App;