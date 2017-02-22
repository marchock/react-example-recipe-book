import { combineReducers } from 'redux';
import RecipesReducer from './recipes_reducer';
import ShoppingListReducer from './shopping-list_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes: RecipesReducer,
  shoppingList: ShoppingListReducer,
  form: formReducer
});

export default rootReducer;
