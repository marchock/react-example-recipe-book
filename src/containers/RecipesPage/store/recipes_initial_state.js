import Recipes from '../../../data/recipes';

export const RECIPE_DEFAULT_STATE = {
    name: '',
    description: '',
    img: '',
    ingredients: [],
    view: '',
};

export const RECIPES_INITIAL_STATE = {
    list: Recipes,
    selected: RECIPE_DEFAULT_STATE,
};


