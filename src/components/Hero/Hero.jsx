import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import PortfolioContext from '../../context/context';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../../actions';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, subtitle } = hero;
  const dispatch = useDispatch();

  const { loading, sent, error } = useSelector(state => state);
  const [buttonState, setButton] = useState('');

  const handleClick = () => {
    dispatch(sendEmail());
  };

  useEffect(() => {
    if (loading === true) {
      setButton('loading');
    } else if (error === true) {
      setButton('error');
    } else if (sent === true) {
      setButton('success');
    }
  }, [loading]);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'} <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {'Know more'}
            </a>
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1250} distance="30px">
          <ProgressButton buttonState={buttonState} onClick={handleClick}></ProgressButton>
        </Fade>
      </Container>
    </section>
  );
};

const ProgressButton = ({ buttonState, onClick }) => {
  return (
    <p className="hero-cta">
      <a className="cta-btn cta-btn--hero" onClick={onClick}>
        {buttonState === 'loading' ? (
          <div className="spinner hero-cta">
            <span className="spinner-inner-1"></span>
            <span className="spinner-inner-2"></span>
            <span className="spinner-inner-3"></span>
          </div>
        ) : buttonState === 'success' ? (
          'Email Sent!'
        ) : buttonState === 'error' ? (
          'Error'
        ) : (
          'Contact'
        )}
      </a>
    </p>
  );
};

export default Header;
