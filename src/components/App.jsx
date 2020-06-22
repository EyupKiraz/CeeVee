import React, { useState, useEffect } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useObjectVal } from 'react-firebase-hooks/database';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

function App() {
  const [data, isLoading] = useObjectVal(firebase.database().ref());

  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    if (!isLoading) {
      setHero({ ...data.hero });
      setAbout({ ...data.about });
      setProjects([...data.projects]);
      setContact({ ...data.contact });
      setFooter({ ...data.footer });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </PortfolioProvider>
      )}
    </>
  );
}

export default App;
