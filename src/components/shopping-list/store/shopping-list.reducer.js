import {initialState} from './shopping-list_initial_state';

import {

    SHOPPING_LIST_ADD_INGREDIENT,
    SHOPPING_LIST_DELETE,
    SHOPPING_LIST_SAVE_INGREDIENT,
    SHOPPING_LIST_CLEAR_FORM,
    SHOPPING_LIST_UPDATE,

} from './shopping-list.types';


export default function(state = initialState, action) {
    let shoppingList = [];

    switch (action.type) {

        case SHOPPING_LIST_ADD_INGREDIENT:
            shoppingList = [ ...state.list ];
            shoppingList.push(action.payload);
            return { ...state, edit: false, item: null, list: shoppingList };


        case SHOPPING_LIST_SAVE_INGREDIENT:
            shoppingList = [ ...state.list ];
            shoppingList.list[action.payload.item.index] = action.payload.item;
            return { ...state, edit: false, item: null, list: shoppingList };


        case SHOPPING_LIST_DELETE:
            shoppingList = [ ...state.list ];
            shoppingList.splice(action.payload, 1);
            return { ...state, edit: false, item: null, list: shoppingList };


        case SHOPPING_LIST_CLEAR_FORM:
            return { ...state, edit: false, item: null };


        case SHOPPING_LIST_UPDATE:
            return { ...state, edit: true, item: {
                index: action.payload,
                name: state.list[action.payload].name,
                amount: state.list[action.payload].amount
            } };


        default:
            return state;
    }
}