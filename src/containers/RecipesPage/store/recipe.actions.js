import axios from 'axios';
import KEYS from '../../../../config/keys';

import {
    RECIPE_NEW,
    RECIPE_UPDATE,
    RECIPE_SELECTED,
    RECIPE_DELETE,
    RECIPE_UPDATE_LIST, RECIPE_UNSELECT,
} from './recipe.types';

const URL = KEYS.API_URL;

export function getRecipesFromApi() {
    return dispatch => {

        axios.get(`${URL}/get-recipes`)
            .then((recipes) => {
                dispatch({ type: RECIPE_UPDATE_LIST, payload: recipes.data })
            });
    }
}


export function recipeUpdate(payload) {
    return dispatch => {
        axios.post(`${URL}/update-recipe`, { ...payload.values })
            .then(({ data }) => {
                if (data.error) { return console.log(data.error); }

                dispatch({ type: RECIPE_UPDATE, payload: payload });
            }).catch(function (error) {
            console.log(error);
        });
    }
}

export function recipeDelete(payload) {
    return dispatch => {
        axios.post(`${URL}/delete-recipe`, { _id: payload })
            .then(({ data }) => {
                if (data.error) { return console.log(data.error); }

                dispatch({ type: RECIPE_DELETE, payload: payload });
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export function recipeSelected(payload) {
    return {
        type: RECIPE_SELECTED,
        payload,
    }
}

export function recipeNew(payload) {
    return dispatch => {

        axios.post(`${URL}/add-recipe`, { ...payload })
            .then(({ data }) => {
                if (data.error) { return console.log(data.error); }

                dispatch({ type: RECIPE_NEW, payload: data });
            }).catch(function (error) {
                console.log(error);
            });
    }
}

export function recipeUnselect() {
    return {
        type: RECIPE_UNSELECT,
    }
}
