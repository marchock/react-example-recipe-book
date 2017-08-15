import { RECIPES_INITIAL_STATE } from './recipes_initial_state';

import {
    RECIPE_NEW,
    RECIPE_SELECTED,
    RECIPE_UPDATE,
    RECIPE_DELETE,
} from './recipe.types';

export default function(state = RECIPES_INITIAL_STATE, action) {
    let recipeList = [];

    switch (action.type) {

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

        default:
            return state;
    }
}
