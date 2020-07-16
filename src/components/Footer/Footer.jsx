import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import uuid from 'uuid';
import PortfolioContext from '../../context/context';
import FontAwesomeIcon from 'react-fontawesome';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <div className="social-links">
          {footer &&
            footer.map(network => {
              const { name, url } = network;
              if (network.name) {
                return (
                  <a
                    key={uuid()}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <FontAwesomeIcon name={name}></FontAwesomeIcon>
                  </a>
                );
              }
              return null;
            })}
        </div>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;
