
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import App from './components/app';
import Header from './components/header';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <div>
                <Header />
                <Route path="/" component={ App } />
            </div>
        </Router>
    </Provider>
    , document.querySelector('.container'));
