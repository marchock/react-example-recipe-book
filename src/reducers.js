import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RecipeReducer from './components/recipes/store/recipe.reducer';
import ShoppingListReducer from './components/shopping-list/store/shopping-list_reducer';

const rootReducer = combineReducers({
    recipe: RecipeReducer,
    shoppingList: ShoppingListReducer,
    form: formReducer
});

export default rootReducer;
