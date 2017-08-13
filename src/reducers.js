import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RecipesReducer from './components/recipes/store/recipes_reducer';
import ShoppingListReducer from './components/shopping-list/shopping-list_reducer';

const rootReducer = combineReducers({
    recipes: RecipesReducer,
    shoppingList: ShoppingListReducer,
    form: formReducer
});

export default rootReducer;
