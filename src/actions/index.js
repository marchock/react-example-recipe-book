
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_NEW_RECIPE = 'FETCH_NEW_RECIPE';
export const SAVE_RECIPE = 'SAVE_RECIPE';
export const CLEAR_RECIPE = 'CLEAR_RECIPE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';
export const SAVE_NEW_RECIPE = 'SAVE_NEW_RECIPE';

export const UPDATE_SHOPPING_LIST = 'UPDATE_SHOPPING_LIST';

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
  return {
    type: DELETE_RECIPE,
    payload: props
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
