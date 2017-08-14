import { RECIPES_INITIAL_STATE } from './recipes_initial_state';

import {
    UPDATE_RECIPES,
    RECIPE_NEW,
    DELETE_RECIPE,
    FETCH_RECIPE,
    CLEAR_RECIPE,
    DELETE_INGREDIENT,
    ADD_INGREDIENT,
    FETCH_NEW_RECIPE, RECIPE_UPDATE_STATE, RECIPE_SELECTED, RECIPE_UPDATE, RECIPE_DELETE
} from './recipe.types';

export default function(state = RECIPES_INITIAL_STATE, action) {
    let recipeList = [];

    switch (action.type) {
        case RECIPE_UPDATE_STATE:
            return {...state, state: action.payload};

        case UPDATE_RECIPES:
            return {...state, recipes: action.payload};

        case RECIPE_NEW:
            const newList = [ ...state.list, action.payload ];
            return { ...state, list: newList };

        case RECIPE_SELECTED:
            const selectedRecipe = state.list[action.payload];
            return { ...state, selected: { ...selectedRecipe } };

        case RECIPE_UPDATE:
            const updatedList = [ ...state.list ];
            updatedList[action.payload.id] = action.payload.values;
            return { ...state, list: [ ...updatedList ] };

        case RECIPE_DELETE:
            recipeList = [ ...state.list ];
            recipeList.splice(Number(action.payload), 1);
            return { ...state, list: [ ...recipeList ] };;

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
