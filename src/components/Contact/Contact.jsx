import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{'Would you like to work with me? Awesome!'}</p>
          </div>
          <ContactForm recipientEmail={email}></ContactForm>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
