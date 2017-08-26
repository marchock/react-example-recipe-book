import { expect } from '../../../test_helper';

import * as actions from '../../../../src/containers/RecipesPage/store/recipe.actions';
import * as types from '../../../../src/containers/RecipesPage/store/recipe.types';

describe('Recipes Actions', () => {
    it('should update a recipe', () => {
        const expectedAction = {
            type: types.RECIPE_UPDATE,
            payload: {}
        };
        expect(actions.recipeUpdate({})).to.eql(expectedAction)
    });

    it('should create a new recipe', () => {
        const expectedAction = {
            type: types.RECIPE_NEW,
            payload: {}
        };
        expect(actions.recipeNew({})).to.eql(expectedAction)
    });

    it('should select a new recipe', () => {
        const expectedAction = {
            type: types.RECIPE_SELECTED,
            payload: {}
        };
        expect(actions.recipeSelected({})).to.eql(expectedAction)
    });

    it('should delete a recipe', () => {
        const expectedAction = {
            type: types.RECIPE_DELETE,
            payload: {}
        };
        expect(actions.recipeDelete({})).to.eql(expectedAction)
    });
})
