import { RECIPES_INITIAL_STATE } from './recipes_initial_state';

import {
    RECIPE_NEW,
    RECIPE_SELECTED,
    RECIPE_UPDATE,
    RECIPE_DELETE, RECIPE_UPDATE_LIST,
} from './recipe.types';

export default function(state = RECIPES_INITIAL_STATE, action) {
    let recipeList = [];

    switch (action.type) {

        case RECIPE_UPDATE_LIST:
            return { ...state, list: [ ...action.payload ] };

        case RECIPE_NEW:
            const newList = [ ...state.list, action.payload ];
            return { ...state, list: newList };

        case RECIPE_SELECTED:
            const selectedRecipe = state.list.find(recipe => recipe._id === action.payload);
            return { ...state, selected: { ...selectedRecipe } };

        case RECIPE_UPDATE:
            const updatedList = [ ...state.list ];
            const recipes = updatedList.map(recipe => {
                return (recipe._id === action.payload.values._id) ? action.payload.values : recipe;
            });

            return { ...state, list: [ ...recipes ] };

        case RECIPE_DELETE:
            recipeList = [ ...state.list ];
            recipeList.splice(Number(action.payload), 1);
            return { ...state, list: [ ...recipeList ] };;

        default:
            return state;
    }
}
