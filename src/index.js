import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import RecipesPage from './containers/RecipesPage';
import ShoppingListPage from './containers/ShoppingListPage';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <div>
                <div className="container">
                    <Header />
                    <Route exact path="/" render={ () => <Redirect to="/recipes"/> }/>
                    <Route path="/recipes" component={ RecipesPage } />
                    <Route path="/shopping-list" component={ ShoppingListPage } />
                </div>
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.querySelector('.root'));
