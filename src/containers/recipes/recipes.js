import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import RecipeEdit from './recipe-edit';
import RecipeNew from './recipe-new';

import Button from '../../components/button/button';

class Recipes extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                    <div className="recipe-list">
                        <div className="row">
                            <div className="col-xs-12">
                                <Button href="/recipes/new" primary>New Recipe</Button>
                            </div>
                        </div>
                        <RecipeList recipes={ this.props.recipeList } />
                    </div>
                </div>
                <div className="col-md-7">
                    <Switch>
                        <Route
                            path={`${ this.props.match.url }/new`}
                            component={ RecipeNew }
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
      recipeList: state.recipe.list
  };
}

export default connect(mapStateToProps)(Recipes)
