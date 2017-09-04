import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ul from '../../../components/Ul';
import Loading from '../../../components/Loading';
import NavLink from './NavItem';
import { getRecipes } from '../store/recipe.selectors';

/**
 * Recipes Navigation
 *
 * This component will render a list of recipes.
 * Each recipe is a clickable link to display a recipe detail
 */
function RecipesNav({ recipes }) {

  if (recipes.list < 1) {
    return <Loading />;
  }

  return (
    <Ul>
      { recipes.map((recipe, index) => (
          <NavLink recipe={recipe} index={index} key={index}/>
      ))}
    </Ul>
  );
}

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
  };
}

export default connect(mapStateToProps)(RecipesNav);

RecipesNav.propTypes = {
  recipes: PropTypes.array.isRequired,
};

RecipesNav.defaultProps = {
  recipes: [],
};
