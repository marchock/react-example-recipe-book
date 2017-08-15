
import {

    SHOPPING_LIST_ADD_INGREDIENT,
    SHOPPING_LIST_DELETE,
    SHOPPING_LIST_UPDATE,
    SHOPPING_LIST_SAVE_INGREDIENT,
    SHOPPING_LIST_CLEAR_FORM,

} from './shopping-list.types';


export function shoppingListAddIngredient(payload) {
    return {
        type: SHOPPING_LIST_ADD_INGREDIENT,
        payload: payload,
    }
}

export function shoppingListDelete(payload) {
    return {
        type: SHOPPING_LIST_DELETE,
        payload: payload,
    }
}

export function shoppingListSaveIngredient(payload) {
    return {
        type: SHOPPING_LIST_SAVE_INGREDIENT,
        payload: payload
    }
}

export function shoppingListClearForm() {
    return {
        type: SHOPPING_LIST_CLEAR_FORM,
    }
}

export function shoppingListUpdate(payload) {
    return {
        type: SHOPPING_LIST_UPDATE,
        payload: payload
    }
}
