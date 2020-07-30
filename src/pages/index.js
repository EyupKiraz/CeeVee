import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, StaticQuery } from 'gatsby';
import * as queryString from 'query-string';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from '../components/App';
import mySaga from '../sagas';
import reducer from '../store';
import '../style/main.scss';

import { isNode } from '@firebase/util';
import ApolloClient, { gql } from 'apollo-boost';
import * as FirestoreService from '../../firebase';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({ reducer, middleware });
sagaMiddleware.run(mySaga);

export default ({ location }) => {
  if (isNode() === true) {
    return null;
  }

  const client = new ApolloClient({
    uri: '/__graphql',
  });

  client.query({
    query,
  });

  const [data, setData] = React.useState(null);
  const { id } = queryString.parse(location.search);
  const defaultID = '4690137630028667272';

  React.useEffect(() => {
    if (!data) {
      try {
        FirestoreService.getData(id)
          .then(item => {
            setData(item.data().data);
          })
          .catch(() => {
            FirestoreService.getData(defaultID).then(item => {
              setData(item.data().data);
            });
          });
      } catch (error) {
        FirestoreService.getData(defaultID).then(item => {
          setData(item.data().data);
        });
      }
    }
  }, [data]);

  return data ? (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Portfolio</title>
        <html lang="en" />
        <meta name="description" content="My Portfolio" />
      </Helmet>
      <App data={data} />
    </Provider>
  ) : (
    ''
  );
};

const query = gql`
  {
    jotform {
      data {
        about {
          aboutMe
          img
        }
        contact {
          email
        }
        footer {
          name
          url
        }
        hero {
          title
          subtitle
        }
        projects {
          desc
          img
          title
          url
        }
      }
    }
  }
`;
