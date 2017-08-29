import { expect } from '../../../test_helper';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store'

import * as actions from '../../../../src/containers/RecipesPage/store/recipe.actions';
import * as types from '../../../../src/containers/RecipesPage/store/recipe.types';
import KEYS from '../../../../config/keys';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares)

const URL = KEYS.API_URL;

const RECIPE_DATA = {
    name: 'TEST',
    description: 'TEST',
    img: 'TEST.jpg',
    ingredients: [],
    view: '',
    _id: '59a299f18a63942fdde42912',
};

describe('Recipes Actions', () => {


    it('should dispatch RECIPE_UPDATE_LIST', () => {
        nock(URL) //nock let you mock http requests
            .get(`/get-recipes`)
            .reply(200, { data: []} );

        const store = mockStore(mockStore, actions);
        const expectedActions = [
            { type: 'RECIPE_UPDATE_LIST', payload: {data: []} }
        ];

        store.dispatch(actions.getRecipesFromApi()).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions)
        });
    });


    it('should dispatch RECIPE_UPDATE', () => {
        nock(URL) //nock let you mock http requests
            .post(`/update-recipe`)
            .reply(200, { data: RECIPE_DATA} );

        const store = mockStore(mockStore, actions);
        const expectedActions = [
            { type: 'RECIPE_UPDATE', payload: RECIPE_DATA }
        ];

        store.dispatch(actions.recipeUpdate(RECIPE_DATA)).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions)
        });
    });

    it('should dispatch RECIPE_NEW', () => {
        nock(URL) //nock let you mock http requests
            .post(`/add-recipe`)
            .reply(200, { data: RECIPE_DATA} );

        const store = mockStore(mockStore, actions);
        const expectedActions = [
            { type: 'RECIPE_NEW', payload: {data: RECIPE_DATA} }
        ];

        store.dispatch(actions.recipeNew(RECIPE_DATA)).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions)
        });
    });

    it('should dispatch RECIPE_DELETE', () => {
        nock(URL) //nock let you mock http requests
            .post(`/delete-recipe`)
            .reply(200, { data: ''} );

        const store = mockStore(mockStore, actions);
        const expectedActions = [
            { type: 'RECIPE_DELETE', payload: '111' }
        ];

        store.dispatch(actions.recipeDelete('111')).then(() => {
            expect(store.getActions()).to.have.deep.members(expectedActions)
        });
    });


    it('should select a recipe', () => {
        const expectedAction = {
            type: types.RECIPE_SELECTED,
            payload: {}
        };
        expect(actions.recipeSelected({})).to.eql(expectedAction)
    });

    it('should unselect a recipe', () => {
        const expectedAction = {
            type: types.RECIPE_UNSELECT,
        };
        expect(actions.recipeUnselect({})).to.eql(expectedAction)
    });


});
