import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DetailButtons from './DetailButtons';
import DetailIngredients from './DetailIngredients';

import Row from '../../../../components/Row/Row';
import H1 from '../../../../components/H1/H1';
import P from '../../../../components/P/index';
import Img from '../../../../components/Img/index';
import FadeIn from '../../../../components/Animations/FadeIn';
import Hr from '../../../../components/Hr/index';
import {getRecipe} from '../../store/recipe.selectors';

/**
 * Recipes Details
 *
 * Find a recipe by id and display its data
 */
class RecipeDetails extends Component {

  render() {
    const { img, name, description, ingredients } = this.props.recipe;

    return (
      <Row fade-in>
        <Row>
          <Img src={ img } />
        </Row>
        <Row>
          <H1>{ name }</H1>
        </Row>
        <Row>
          <P>{ description }</P>
        </Row>
        <DetailButtons />
        <Hr />
        <DetailIngredients ingredients={ ingredients } />
      </Row>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    recipe: getRecipe(state, props),
  };
}

export default connect(mapStateToProps)(RecipeDetails);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
};

RecipeDetails.defaultProps = {
  recipe: {},
};
