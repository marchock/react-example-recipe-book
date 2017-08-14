import Recipes from '../../../data/Recipes';

export const RECIPE_DEFAULT_STATE = {
    name: '',
    description: '',
    img: '',
    ingredients: [],
    view: '',
};

console.log(Recipes)

export const RECIPES_INITIAL_STATE = {
    list: Recipes,
    selected: RECIPE_DEFAULT_STATE,
};


