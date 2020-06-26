import { isNode } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import * as FirestoreService from '../../firebase';
import { PortfolioProvider } from '../context/context';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';

function App({ id }) {
  if (isNode() === true) {
    return null;
  }

  const [data, setData] = useState(null);
  const defaultID = "4690137630028667272";

  useEffect(() => {
    if (!data) {
      FirestoreService.getData(id).then((item) => { setData(item.data().data) }).catch((error) => {
        FirestoreService.getData(defaultID).then((item) => { setData(item.data().data) })
      });
    }
  }, [data]);

  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    if (data) {
      setHero({ ...data.hero });
      setAbout({ ...data.about });
      setProjects([...data.projects]);
      setContact({ ...data.contact });
      setFooter([...data.footer]);
    }
  }, [data]);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
