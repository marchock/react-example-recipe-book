import { expect } from '../../test_helper';

import * as actions from '../../../src/components/recipes/store/recipe.actions';
import * as types from '../../../src/components/recipes/store/recipe.types';

describe('Actions Recipes', () => {
  it('should create an action to update shopping list', () => {
    const expectedAction = {
      type: types.UPDATE_SHOPPING_LIST,
      payload: {}
    }
    expect(actions.updateShoppingList({})).to.eql(expectedAction)
  });

  it('should create an action to update recipes', () => {
    const expectedAction = {
      type: types.UPDATE_RECIPES,
      payload: {}
    }
    expect(actions.updateRecipes({})).to.eql(expectedAction)
  });

  it('should create an action to fetch new recipe', () => {
    const expectedAction = {
      type: types.FETCH_NEW_RECIPE,
      payload: {}
    }
    expect(actions.fetchNewRecipe({})).to.eql(expectedAction)
  });

  it('should create an action to save new recipe', () => {
    const expectedAction = {
      type: types.SAVE_NEW_RECIPE,
      payload: {}
    }
    expect(actions.saveNewRecipe({})).to.eql(expectedAction)
  });

  it('should create an action to DELETE_RECIPE', () => {

    const payload = {
      recipes: [{name: '', discription: ''}, {name: '', discription: ''}],
      payload: 0
    }

    const expectedAction = {
      type: types.DELETE_RECIPE,
      payload: [{name: '', discription: ''}],
    }

    expect(actions.deleteRecipe(payload)).to.eql(expectedAction)
  });

  it('should create an action to fetch recipe', () => {
    const expectedAction = {
      type: types.FETCH_RECIPE,
      payload: {}
    }
    expect(actions.fetchRecipe({})).to.eql(expectedAction)
  });

  it('should create an action to save recipe', () => {
    const expectedAction = {
      type: types.SAVE_RECIPE,
      payload: {}
    }
    expect(actions.saveRecipe({})).to.eql(expectedAction)
  });

  it('should create an action to clear recipe', () => {
    const expectedAction = {
      type: types.CLEAR_RECIPE,
      payload: {}
    }
    expect(actions.clearRecipe({})).to.eql(expectedAction)
  });

  it('should create an action to delete ingredient', () => {
    const expectedAction = {
      type: types.DELETE_INGREDIENT,
      payload: {}
    }
    expect(actions.deleteIngredient({})).to.eql(expectedAction)
  });

  it('should create an action to add ingredient', () => {
    const expectedAction = {
      type: types.ADD_INGREDIENT,
      payload: {}
    }
    expect(actions.addIngredient({})).to.eql(expectedAction)
  });
})
