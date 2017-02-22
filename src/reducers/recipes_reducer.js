import { UPDATE_RECIPES, SAVE_NEW_RECIPE, DELETE_RECIPE, FETCH_RECIPE, CLEAR_RECIPE, DELETE_INGREDIENT, ADD_INGREDIENT, FETCH_NEW_RECIPE } from '../actions/index';

const INITIAL_STATE = {
  recipes: [
    {
      name: 'Schnitzel',
      description: 'Very tasty',
      img: 'http://mobile-cuisine.com/wp-content/uploads/2013/09/Wiener-Schnitzel-Fun-Facts.jpg',
      ingredients: [
        {
          name: 'French Fries',
          amount: 2
        },
        {
          name: 'Pork Meat',
          amount: 1
        }
      ]
    },
    {
      name: 'Summer Salad',
      description: 'Okayish',
      img: 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
      ingredients: []
    }
  ],

  recipe: null,

  blankTemplate: {
    name: '',
    description: '',
    img: '',
    ingredients: []
  }

};

export default function(state = INITIAL_STATE, action) {

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
