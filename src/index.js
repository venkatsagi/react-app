import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Root from './init-route';
import rootReducer from './init-reducer';
import './styles/index.scss';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
