import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import RecipesPageDetails from './RecipesPageDetails/index';
import RecipesPageEdit from './RecipesPageEdit/index';
import RecipesPageNew from './RecipesPageNew/index';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Ul from '../../components/Ul/Ul';
import ListItemRecipe from '../../components/ListItem/ListItemRecipe';
import Button from '../../components/Button/Button';

class RecipesPage extends Component {
    render() {

        const { recipeList } = this.props;

        return (
            <Row>
                <Col width={ 5 }>
                    <Row margin padding>
                        <Button href="/recipes/new" primary>New Recipe</Button>
                    </Row>
                    <Row padding>
                        <Ul>
                            { recipeList.map(( recipe, index) => {
                                return (
                                    <ListItemRecipe recipe={recipe} index={index} key={index}/>
                                )})
                            }
                        </Ul>
                    </Row>
                </Col>
                <Col width={ 7 }>
                    <Row padding>
                        <Switch>
                            <Route
                                path={`${ this.props.match.url }/new`}
                                component={ RecipesPageNew }
                            />
                            <Route
                                exact
                                path={`${ this.props.match.url }/:id`}
                                component={ RecipesPageDetails }
                            />
                            <Route
                                path={`${ this.props.match.url }/:id/edit`}
                                component={ RecipesPageEdit }
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
