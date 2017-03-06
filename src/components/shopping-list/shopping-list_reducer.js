import {initialState} from './shopping-list_initial_state';

import {

  ADD_SHOPPING_LIST_ITEM,
  DELETE_SHOPPING_LIST_ITEM,
  UPDATE_SHOPPING_LIST_ITEM,
  CLEAR_SHOPPING_LIST_FORM,
  UPDATE_SHOPPING_LIST_FORM

} from './shopping-list_types';


export default function(state = initialState, action) {

  switch (action.type) {

  case ADD_SHOPPING_LIST_ITEM:
  case DELETE_SHOPPING_LIST_ITEM:
  case UPDATE_SHOPPING_LIST_ITEM:
    return { ...state,
      edit: action.payload.edit,
      item: action.payload.item,
      list: action.payload.list
    };

  case UPDATE_SHOPPING_LIST_ITEM:
    return state;

  case CLEAR_SHOPPING_LIST_FORM:
  case UPDATE_SHOPPING_LIST_FORM:
    return { ...state, edit: action.payload.edit, item: action.payload.item };


  default:
    return state;
  }
}
