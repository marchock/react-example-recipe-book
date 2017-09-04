import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { recipeUpdate, recipeUnselect } from '../../store/recipe.actions';
import { getRecipe } from '../../store/recipe.selectors';

import RecipeForm from '../components/RecipeForm/index';
import Row from '../../../../components/Row/Row';

/**
 * Recipe Edit
 *
 * To edit a recipe details and save it to the server
 */
class RecipeEdit extends React.Component {

  /**
   * update store.recipe.selected to null to reset component
   */
  componentWillUnmount() {
    this.props.clearSeclectedRecipe();
  }

  /**
   * Submit form to api and then redirect to recipe details
   */
  submitForm(values) {
    this.props.updateRecipe({ values });
    this.props.history.push(`/recipes/${this.props.match.params.id}`);
  }

  render() {
    return (
      <Row fade-in>
        <RecipeForm onSubmit={ values => this.submitForm(values) } />
      </Row>
    );
  }
}

RecipeEdit = reduxForm({
    form: 'RecipeForm',
    enableReinitialize: true,
  })(RecipeEdit);

function mapStateToProps(state, props) {
  return {
    recipe: getRecipe(state, props),
    initialValues: getRecipe(state, props),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRecipe: (values) => dispatch(recipeUpdate(values)),
    clearSeclectedRecipe: () => dispatch(recipeUnselect()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEdit);

RecipeEdit.propTypes = {
  recipe: PropTypes.object,
  initialValues: PropTypes.object,
};

RecipeEdit.defaultProps = {
  recipe: {},
  initialValues: {},
};
