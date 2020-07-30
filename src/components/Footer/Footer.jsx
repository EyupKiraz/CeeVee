import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import uuid from 'uuid';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
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
                    <i className={`fa fa-${'refresh'} fa-inverse`} />
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
