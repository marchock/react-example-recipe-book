import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/recipe.actions';

import RecipesNav from './RecipesNav';
import RecipesChildRoutes from './RecipesChildRoutes';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';

/**
 * Recipe Page
 *
 */
class RecipesPage extends React.Component {

  /**
   * Get recipes data from an api
   */
  componentWillMount() {
    this.props.getRecipesFromApi();
  }

  render() {
    return (
      <Row>
        <Col width={ 5 }>
          <Row margin padding>
            <Button href="/recipes/new" primary>New Recipe</Button>
          </Row>
          <Row padding>
            <RecipesNav />
          </Row>
        </Col>
        <Col width={ 7 }>
          <Row padding>
            <RecipesChildRoutes />
          </Row>
        </Col>
      </Row>
    );
  }
};

export default connect(null, actions)(RecipesPage);
