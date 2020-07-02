import 'bootstrap/dist/css/bootstrap.min.css';
import * as queryString from 'query-string';
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '../style/main.scss';

export default location => {
  const { id } = queryString.parse(location.search);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Portfolio</title>
        <html lang="en" />
        <meta name="description" content="My Portfolio" />
      </Helmet>
      <App id={id} />
    </>
  );
};
