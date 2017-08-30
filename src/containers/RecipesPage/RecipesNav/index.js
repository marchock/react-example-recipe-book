import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ul from '../../../components/Ul/Ul';
import ListItemRecipe from '../../../components/ListItem/ListItemRecipe';
import Loading from '../../../components/Loading/index';

/**
 * Recipes Navigation
 *
 * This component will render a list of recipes.
 * Each recipe is a clickable link to display a recipe detail
 */
function RecipesNav({ recipeList }) {

  if (recipeList.list < 1) {
    return <Loading />;
  }

  return (
    <Ul>
      { recipeList.map((recipe, index) => (
          <ListItemRecipe recipe={recipe} index={index} key={index}/>
      ))}
    </Ul>
  );
}

function mapStateToProps(state) {
  return {
    recipeList: state.recipe.list,
  };
}

export default connect(mapStateToProps)(RecipesNav);

RecipesNav.propTypes = {
  recipeList: PropTypes.array.isRequired,
};

RecipesNav.defaultProps = {
  recipeList: [],
};
