import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { recipeNew } from '../../store/recipe.actions';
import RecipeForm from '../components/RecipeForm/index';
import Row from '../../../../components/Row/Row';

/**
 * Recipe New
 *
 * Add a new recipe to the store.recipe.list
 */
class RecipeNew extends React.Component {

  /**
   * submitForm
   *
   * Submit form to api and redirect to recipes page
   *
   * @param: Object - values
   */
  submitForm(values) {
    this.props.addNewRecipe(values);
    this.props.history.push(`/recipes`);
  }

  render() {
    return (
      <Row fade-in>
        <RecipeForm onSubmit={ values => this.submitForm(values) } />
      </Row>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewRecipe: (values) => dispatch(recipeNew(values)),
  };
}

export default connect(null, mapDispatchToProps)(RecipeNew);

RecipeNew.propTypes = {
  addNewRecipe: PropTypes.func.isRequired,
};

RecipeNew.defaultProps = {};
