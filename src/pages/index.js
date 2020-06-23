import { isNode } from '@firebase/util';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'gatsby-plugin-firebase';
import React, { useEffect, useState } from 'react';
import { useObjectVal } from 'react-firebase-hooks/database';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '../style/main.scss';

export default () => {
  if (isNode() === true) {
    return null;
  }

  const [title, setTitle] = useState('');
  const [lang, setLang] = useState('');
  const [description, setDescription] = useState('');

  const [data, isLoading] = useObjectVal(firebase.database().ref());

  useEffect(() => {
    if (!isLoading) {
      setTitle(data.headData.title);
      setDescription(data.headData.description);
      setLang(data.headData.lang);
    }
  }, [data]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'My Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'My Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};
