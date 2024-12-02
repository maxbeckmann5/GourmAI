import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SearchRecipes from './components/SearchRecipes';

function App() {
  const [showSearch, setShowSearch] = useState(false); // State für Komponentenumschaltung

  const handleGetStarted = () => {
    setShowSearch(true); // Setze den State auf true, wenn "Get Started" geklickt wird
  };

  return (
    <div>
      {showSearch ? (
        // Zeige die SearchRecipes-Komponente, wenn showSearch true ist
        <SearchRecipes onSearch={(query) => console.log(`Searching for: ${query}`)} />
      ) : (
        // Standard-Komponenten, wenn showSearch false ist
        <>
          <Header />
          <Features />
          <Hero onGetStarted={handleGetStarted} /> {/* Funktion an Hero übergeben */}
          <Testimonials />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
