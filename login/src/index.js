import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/index';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);
