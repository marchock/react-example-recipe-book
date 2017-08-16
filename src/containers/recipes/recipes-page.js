import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import RecipeEdit from './recipe-edit';
import RecipeNew from './recipe-new';
import Button from '../../components/button/button';
import Row from '../../components/layout/row/row';
import Col from '../../components/layout/col/col';

class Recipes extends Component {

    render() {
        return (
            <Row>
                <Col width={ 5 }>
                    <Row>
                        <Button href="/recipes/new" primary>New Recipe</Button>
                        <RecipeList recipes={ this.props.recipeList } />
                    </Row>
                </Col>

                <Col width={ 7 }>
                    <Row>
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
                    </Row>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
  return {
      recipeList: state.recipe.list
  };
}

export default connect(mapStateToProps)(Recipes)
