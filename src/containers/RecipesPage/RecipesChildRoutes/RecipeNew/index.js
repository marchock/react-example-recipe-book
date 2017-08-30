import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/recipe.actions';
import Row from '../../../../components/Row/Row';
import FadeIn from '../../../../components/Animations/FadeIn';
import RecipeForm from '../RecipeForm/index';

const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
`;

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
    this.props.recipeNew(values);
    this.props.history.push(`/recipes`);
  }

  render() {
    return (
      <RowAnimation>
        <RecipeForm onSubmit={ values => this.submitForm(values) } />
      </RowAnimation>
    );
  }
}

export default connect(null, actions)(RecipeNew);
