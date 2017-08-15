import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RecipeReducer from './containers/recipes/store/recipe.reducer';
import ShoppingListReducer from './containers/shopping-list/store/shopping-list.reducer';

const rootReducer = combineReducers({
    recipe: RecipeReducer,
    shoppingList: ShoppingListReducer,
    form: formReducer
});

export default rootReducer;
