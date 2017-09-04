import { createSelector } from 'reselect';

export const getRecipes = (state) => state.recipe.list;

export const getRecipe = (state, { match }) => state.recipe.list
  .find(recipe => recipe._id === match.params.id);

// export const getRecipe = createSelector(
//   [getRecipes],
//   (getRecipes) => {
//
//   }
// );
