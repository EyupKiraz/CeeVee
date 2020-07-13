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

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({ reducer, middleware });
sagaMiddleware.run(mySaga);

export default ({ location }) => {
  const { id } = queryString.parse(location.search);
  const defaultID = '4690137630028667272';

  return (
    <StaticQuery
      query={query}
      render={allUsers => {
        let data = allUsers.allJotform.edges.find(userData => userData.node.id === id);

        if (!data) {
          data = allUsers.allJotform.edges.find(userData => userData.node.id === defaultID);
        }

        return (
          <Provider store={store}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>My Portfolio</title>
              <html lang="en" />
              <meta name="description" content="My Portfolio" />
            </Helmet>
            <App data={data.node.data} />
          </Provider>
        );
      }}
    />
  );
};

const query = graphql`
  query {
    allJotform {
      edges {
        node {
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
            projects {
              desc
              img
              title
              url
            }
            hero {
              subtitle
              title
            }
          }
          id
        }
      }
    }
  }
`;
