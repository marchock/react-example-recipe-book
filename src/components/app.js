import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Recipes from '../containers/recipes/recipes';
import ShoppingList from '../containers/shopping-list/shopping-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={ () => <Redirect to="/recipes"/> }/>
                <Route path="/recipes" component={ Recipes } />
                <Route path="/shopping-list" component={ ShoppingList } />
            </div>
        );
    }
}
