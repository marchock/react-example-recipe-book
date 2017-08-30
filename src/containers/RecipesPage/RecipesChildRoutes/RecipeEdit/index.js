import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../store/recipe.actions';

import RecipeForm from '../RecipeForm/index';

import Row from '../../../../components/Row/Row';
import FadeIn from '../../../../components/Animations/FadeIn';

const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
`;

/**
 * Recipe Edit
 *
 * To edit a recipe details and save it to the server
 */
class RecipeEdit extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!nextProps.recipe && nextProps.recipes.length > 0) {
      this.props.recipeSelected(this.props.match.params.id);
    }
  }

  /**
   * update store.recipe.selected to null to reset component
   */
  componentWillUnmount() {
    this.props.recipeUnselect();
  }

  /**
   * Submit form to api and then redirect to recipe details
   */
  submitForm(values) {
    this.props.recipeUpdate({ values });
    this.props.history.push(`/recipes/${this.props.match.params.id}`);
  }

  render() {
    return (
      <RowAnimation>
        <RecipeForm onSubmit={ values => this.submitForm(values) } />
      </RowAnimation>
    );
  }
}

RecipeEdit = reduxForm({
    form: 'RecipeForm',
    enableReinitialize: true,
  })(RecipeEdit);

function mapStateToProps(state) {
  return {
    recipe: state.recipe.selected,
    recipes: state.recipe.list,
    initialValues: state.recipe.selected,
  };
}

export default connect(mapStateToProps, actions)(RecipeEdit);

RecipeEdit.propTypes = {
  recipe: PropTypes.object,
  recipes: PropTypes.array,
  initialValues: PropTypes.object,
};

RecipeEdit.defaultProps = {
  recipe: {},
  initialValues: {},
  recipes: [],
};
