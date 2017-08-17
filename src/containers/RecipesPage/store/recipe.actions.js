
import {
    RECIPE_NEW,
    RECIPE_UPDATE,
    RECIPE_SELECTED,
    RECIPE_DELETE,
} from './recipe.types';

export function recipeUpdate(payload) {
    return {
        type: RECIPE_UPDATE,
        payload,
    }
}

export function recipeDelete(payload) {
    return {
        type: RECIPE_DELETE,
        payload,
    }
}

export function recipeSelected(payload) {
    return {
        type: RECIPE_SELECTED,
        payload,
    }
}

export function recipeNew(payload) {
  return {
    type: RECIPE_NEW,
    payload
  }
}
