import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipesFromApi } from './store/recipe.actions';

import RecipesNav from './RecipesNav';
import RecipesChildRoutes from './RecipesChildRoutes';
import Col from '../../components/Col/index';
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
    this.props.getRecipes();
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
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipes: () => dispatch(getRecipesFromApi()),
  };
}

export default connect(null, mapDispatchToProps)(RecipesPage);

// Specifies prop Types:
RecipesPage.propTypes = {
  getRecipes: PropTypes.func.isRequired,
};

// Specifies the default values for props:
RecipesPage.defaultProps = {};
