import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Recipes from './recipes/recipes';
import ShoppingList from './shopping-list/shopping-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route path="/recipes" component={ Recipes } />
                <Route path="/shopping-list" component={ ShoppingList } />
            </div>
        );
    }
}



