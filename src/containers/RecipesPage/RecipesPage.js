import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipeList from './recipe-list';
import RecipeDetail from './recipe-detail';
import RecipeEdit from './recipe-edit';
import RecipeNew from './recipe-new';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';

class RecipesPage extends Component {
    render() {
        return (
            <Row>
                <RecipeList recipes={ this.props.recipeList }/>
                <Col width={ 7 }>
                    <Row padding>
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

export default connect(mapStateToProps)(RecipesPage)
