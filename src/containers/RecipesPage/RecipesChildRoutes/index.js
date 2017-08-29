import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import RecipeDetails from './RecipeDetails';
import RecipeEdit from './RecipeEdit';
import RecipeNew from './RecipeNew';

/**
 * Recipes Child Routes
 */
const RecipesChildRoutes = (props) => {
    return (
        <Switch>
            <Route
                path={`${ props.match.url }/new`}
                component={ RecipeNew }
            />
            <Route
                exact
                path={`${ props.match.url }/:id`}
                component={ RecipeDetails }
            />
            <Route
                path={`${ props.match.url }/:id/edit`}
                component={ RecipeEdit }
            />
        </Switch>
    );
};

/**
 * Wrapped RecipesChildRoutes with "withRouter" to get routing data (props.match.url)
 */
export default withRouter(RecipesChildRoutes);
