import React from 'react';
import { PortfolioProvider } from '../context/context';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';

function App({ data }) {
  return (
    <PortfolioProvider value={{ ...data }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
