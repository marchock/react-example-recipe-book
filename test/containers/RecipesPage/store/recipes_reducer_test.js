import { expect } from '../../../test_helper';
import * as types from '../../../../src/containers/RecipesPage/store/recipe.types';

import {
    RECIPES_INITIAL_STATE
} from '../../../../src/containers/RecipesPage/store/recipes_initial_state';
import RecipeReducer from '../../../../src/containers/RecipesPage/store/recipe.reducer';


describe('Recipe Reducer', () => {

    const recipe = {
        name: 'test',
        description: 'test',
        img: 'test',
        ingredients: [],
    };


    it('should return the initial state', () => {
        expect(RecipeReducer(undefined, {}))
            .to
            .eql(RECIPES_INITIAL_STATE);
    });


    it('should add a new recipe', () => {
        const index = RECIPES_INITIAL_STATE.list.length;
        let recipesState = Object.assign({}, RECIPES_INITIAL_STATE);
        recipesState.list.push(recipe);

        expect(RecipeReducer(RECIPES_INITIAL_STATE, {
                type: types.RECIPE_NEW,
                payload: recipe,
            }
        ).list[index]).to.deep.include(recipesState.list[index]);
    });


    it('should delete a recipe', () => {
        const list = [ ...RECIPES_INITIAL_STATE.list ]
        let recipesState = { ...RECIPES_INITIAL_STATE, list: list };
        recipesState.list.splice(0, 1);

        expect(RecipeReducer(RECIPES_INITIAL_STATE, {
                type: types.RECIPE_DELETE,
                payload: 0,
            }
        ).list.length).to.equal(recipesState.list.length);
    });

    it('should update a recipe', () => {
        const index = 0;
        let list = [ ...RECIPES_INITIAL_STATE.list ];
        list[index] = recipe;
        let recipesState = { ...RECIPES_INITIAL_STATE, list: list };

        expect(RecipeReducer(RECIPES_INITIAL_STATE, {
                type: types.RECIPE_UPDATE,
                payload: {
                    values: recipe,
                    id: index,
                },
            }
        ).list[index]).to.deep.include(recipesState.list[index]);
    });


    it('should select a recipe', () => {
        const index = 0;
        let list = [ ...RECIPES_INITIAL_STATE.list ];
        let recipesState = { ...RECIPES_INITIAL_STATE, selected: list[index] };

        expect(RecipeReducer(RECIPES_INITIAL_STATE, {
                type: types.RECIPE_SELECTED,
                payload: index,
            }
        ).selected).to.deep.include(recipesState.selected);
    });
});
