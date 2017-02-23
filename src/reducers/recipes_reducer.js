import { RECIPES_INITIAL_STATE } from './recipes_initial_state';

import {
  UPDATE_RECIPES,
  SAVE_NEW_RECIPE,
  DELETE_RECIPE,
  FETCH_RECIPE,
  CLEAR_RECIPE,
  DELETE_INGREDIENT,
  ADD_INGREDIENT,
  FETCH_NEW_RECIPE
} from '../actions/types';


export default function(state = RECIPES_INITIAL_STATE, action) {

  switch (action.type) {

  case UPDATE_RECIPES:
    return {...state, recipes: action.payload};

  case SAVE_NEW_RECIPE:
    return {...state, recipes: action.payload};

  case DELETE_RECIPE:
    state.recipes.splice(Number(action.payload), 1);
    return {...state, recipe: null};

  case FETCH_RECIPE:
    return {...state, recipe: state.recipes[action.payload]};

  case FETCH_NEW_RECIPE:
    return {...state, recipe: state.blankTemplate};

  case CLEAR_RECIPE:
    return {...state, recipe: null};

  case DELETE_INGREDIENT:
    return {...state, recipe: action.payload};

  case ADD_INGREDIENT:
    return {...state, recipe: action.payload};

  default:
    return state;
  }
}
