import { expect } from '../../../test_helper';
import * as types from '../../../../src/containers/RecipesPage/store/recipe.types';

import {
    RECIPES_INITIAL_STATE
} from '../../../../src/containers/RecipesPage/store/recipes_initial_state';
import RecipeReducer from '../../../../src/containers/RecipesPage/store/recipe.reducer';


describe('Recipe Reducer', () => {
    let RECIPE_LIST_DATA = {};
    let RECIPE_DATA = {};
    let _id = '1';

    beforeEach(() => {

        _id = '1';

        RECIPE_DATA = {
            name: 'Recipe',
            description: 'Recipe',
            img: 'Recipe.jpg',
            ingredients: [],
            view: '',
            _id: _id,
        };

        RECIPE_LIST_DATA = {
            selected: null,
            list: [
                {
                    name: 'TEST',
                    description: 'TEST',
                    img: 'TEST.jpg',
                    ingredients: [],
                    view: '',
                    _id: '1',
                },
                {
                    name: 'TEST',
                    description: 'TEST',
                    img: 'TEST.jpg',
                    ingredients: [],
                    view: '',
                    _id: '2',
                }
            ]};
    });


    it('should return the initial state', () => {
        expect(RecipeReducer(undefined, {}))
            .to
            .eql(RECIPES_INITIAL_STATE);
    });


    it('should add a new recipe', () => {
        const index = RECIPE_LIST_DATA.list.length;
        let recipesState = Object.assign({}, RECIPE_LIST_DATA);
        recipesState.list.push(RECIPE_DATA);

        expect(RecipeReducer(RECIPE_LIST_DATA, {
                type: types.RECIPE_NEW,
                payload: RECIPE_DATA,
            }
        ).list[index]).to.deep.include(recipesState.list[index]);
    });


    it('should delete a recipe', () => {
        const recipeList = [ ...RECIPE_LIST_DATA.list ]
        const list = recipeList.filter(recipe => recipe._id !== '1');

        expect(RecipeReducer(RECIPE_LIST_DATA, {
                type: types.RECIPE_DELETE,
                payload: '1',
            }
        ).list.length).to.equal(list.length);
    });


    it('should update a recipe', () => {

        let recipeList = [ ...RECIPE_LIST_DATA.list ];

        const recipes = recipeList.map(recipe => {
            return (recipe._id === _id) ? RECIPE_DATA : recipe;
        });

        expect(RecipeReducer(RECIPE_LIST_DATA, {
                type: types.RECIPE_UPDATE,
                payload: {
                    values: RECIPE_DATA,
                    id: _id,
                },
            }
        ).list).to.have.deep.members(recipes);
    });


    it('should select a recipe', () => {
        const _id = '1';
        let list = [ ...RECIPE_LIST_DATA.list ];
        let recipesState = {
            ...RECIPE_LIST_DATA,
            selected: list.find(recipe => recipe._id === _id)
        };

        expect(RecipeReducer(RECIPE_LIST_DATA, {
                type: types.RECIPE_SELECTED,
                payload: _id,
            }
        ).selected).to.deep.include(recipesState.selected);
    });
});
