import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import Root from './init-route';
import rootReducer from './init-reducer';
import './styles/index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

library.add(faEnvelope, faKey);

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
