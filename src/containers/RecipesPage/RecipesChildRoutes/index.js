import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import RecipeDetails from './RecipeDetails';
import RecipeEdit from './RecipeEdit';
import RecipeNew from './RecipeNew';


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

export default withRouter(RecipesChildRoutes);
