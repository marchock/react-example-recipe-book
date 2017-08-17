import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import RecipesPage from '../containers/RecipesPage/RecipesPage';
import ShoppingListPage from '../containers/ShoppingListPage/ShoppingListPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={ () => <Redirect to="/recipes"/> }/>
                <Route path="/recipes" component={ RecipesPage } />
                <Route path="/shopping-list" component={ ShoppingListPage } />
            </div>
        );
    }
}
