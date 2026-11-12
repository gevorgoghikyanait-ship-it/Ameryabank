import React from 'react';
import Header from './components/Header/header'; // Ստուգիր՝ եթե Header պանակի մեջ է, թող այսպես մնա
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      <Header />
      <ServicesSection />
    </div>
  );
}

export default App; // Այստեղ պարտադիր պետք է լինի export default App;