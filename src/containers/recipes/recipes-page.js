import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import RecipeEdit from './recipe-edit';
import RecipeNew from './recipe-new';
import Col from '../../components/col/col';

class Recipes extends Component {
    render() {
        return (
            <div>
                <RecipeList recipes={ this.props.recipeList }/>
                <Col width={ 7 }>
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
                </Col>
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
