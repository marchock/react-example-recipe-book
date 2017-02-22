import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import Recipes from './components/recipes/recipes';
import RecipeDetail from './components/recipes/recipe-detail';
import RecipeEdit from './components/recipes/recipe-edit';

import ShoppingList from './components/shopping-list/shopping-list';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Recipes} />
    <Route path="recipes" component={Recipes}>
      <Route path="new" component={RecipeEdit} />
      <Route path=":id" component={RecipeDetail} />
      <Route path=":id/edit" component={RecipeEdit} />
    </Route>
    <Route path="shopping-list" component={ShoppingList} />
  </Route>
)
