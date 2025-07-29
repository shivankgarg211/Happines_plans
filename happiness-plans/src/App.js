import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
