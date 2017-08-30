import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ul from '../../../components/Ul';
import Loading from '../../../components/Loading';
import NavLink from './NavItem';

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
          <NavLink recipe={recipe} index={index} key={index}/>
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
