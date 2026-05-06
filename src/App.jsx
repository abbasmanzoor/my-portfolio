import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="Home"><Hero /></section>
      <section id="About"><About /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"><Projects /></section>
      <section id="Experience"><Work /></section>
      <section id="Contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;