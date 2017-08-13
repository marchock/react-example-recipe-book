import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import RecipeEdit from './recipe-edit';

class Recipes extends Component {
    render() {
        return (
            <div className="row">

                <RecipeList recipes={ this.props.recipes } />

                <div className="col-md-7">
                    <Switch>
                        <Route
                            path={`${ this.props.match.url }/new`}
                            component={ RecipeEdit }
                        />
                        <Route
                            exact
                            path={`${ this.props.match.url }/:id`}
                            component={ RecipeDetail }
                        />
                        <Route
                            path={`${ this.props.match.url }/:id/edit`}
                            component={ RecipeEdit }
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      recipes: state.recipes.recipes
  };
}

export default connect(mapStateToProps)(Recipes)
