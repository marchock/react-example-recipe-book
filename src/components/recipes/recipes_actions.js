import _ from 'lodash';

import {
  UPDATE_SHOPPING_LIST,
  UPDATE_RECIPES,
  FETCH_NEW_RECIPE,
  SAVE_NEW_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPE,
  SAVE_RECIPE,
  CLEAR_RECIPE,
  DELETE_INGREDIENT,
  ADD_INGREDIENT

} from './recipes_types';

export function updateShoppingList(props) {
  return {
    type: UPDATE_SHOPPING_LIST,
    payload: props
  }
}

export function updateRecipes(props) {
  return {
    type: UPDATE_RECIPES,
    payload: props
  }
}

export function fetchNewRecipe(props) {
  return {
    type: FETCH_NEW_RECIPE,
    payload: props
  }
}

export function saveNewRecipe(props) {
  return {
    type: SAVE_NEW_RECIPE,
    payload: props
  }
}

export function deleteRecipe(props) {
  let recipes = _.cloneDeep(props.recipes);
  recipes.splice(props.payload, 1);

  return {
    type: DELETE_RECIPE,
    payload: recipes
  }
}

export function fetchRecipe(props) {
  return {
    type: FETCH_RECIPE,
    payload: props
  }
}

export function saveRecipe(props) {
  return {
    type: SAVE_RECIPE,
    payload: props
  }
}

export function clearRecipe(props) {
  return {
    type: CLEAR_RECIPE,
    payload: props
  }
}

export function deleteIngredient(props) {
  return {
    type: DELETE_INGREDIENT,
    payload: props
  }
}

export function addIngredient(props) {
  return {
    type: ADD_INGREDIENT,
    payload: props
  }
}
