import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import styled from 'styled-components';

import rootReducer from 'reducers';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

import 'styles/main.scss';

/** Only apply redux dev tools middleware if the user has redux dev tools installed */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const middleware = composeEnhancers();

const store = createStore(rootReducer, {}, middleware);

const Application = connect(state => ({
  darkOverlay: state.navDropdownVisible,
}))(({ darkOverlay }) => (
  <div>
    <Header style={{ zIndex: 2 }} />
    <Main style={{ zIndex: 0 }} darkOverlay={darkOverlay} />
    <Footer />
  </div>
));
ReactDOM.render(
  <Provider store={store}><Application /></Provider>,
  document.getElementById('root')
);
