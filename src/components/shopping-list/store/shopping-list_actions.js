import _ from 'lodash';

import {

  ADD_SHOPPING_LIST_ITEM,
  DELETE_SHOPPING_LIST_ITEM,
  UPDATE_SHOPPING_LIST_ITEM,
  CLEAR_SHOPPING_LIST_FORM,
  UPDATE_SHOPPING_LIST_FORM

} from './shopping-list_types';

export function addShoppingListItem(props) {
  let shoppingList = _.cloneDeep(props.shoppingList);
  shoppingList.list.push(props.newItem);
  shoppingList.edit = false;
  shoppingList.item = null;

  return {
    type: ADD_SHOPPING_LIST_ITEM,
    payload: shoppingList
  }
}

export function deleteShoppingListItem(props) {
  let shoppingList = _.cloneDeep(props);
  shoppingList.edit = false;
  shoppingList.list.splice(shoppingList.item.index, 1);
  shoppingList.item = null;

  return {
    type: DELETE_SHOPPING_LIST_ITEM,
    payload: shoppingList
  }
}

export function updateShoppingListItem(props) {
  let shoppingList = _.cloneDeep(props.shoppingList);
  shoppingList.edit = false;
  shoppingList.list[shoppingList.item.index] = props.newItem;
  shoppingList.item = null;

  return {
    type: UPDATE_SHOPPING_LIST_ITEM,
    payload: shoppingList
  }
}

export function clearShoppingListForm(props) {
  let shoppingList = _.cloneDeep(props);
  shoppingList.edit = false;
  shoppingList.item = null;

  return {
    type: CLEAR_SHOPPING_LIST_FORM,
    payload: shoppingList
  }
}


export function updateShoppingListForm(props) {
  let shoppingList = _.cloneDeep(props.shoppingList);
  shoppingList.edit = true;
  shoppingList.item = {
    index: props.index,
    name: shoppingList.list[props.index].name,
    amount: shoppingList.list[props.index].amount
  };

  return {
    type: UPDATE_SHOPPING_LIST_FORM,
    payload: shoppingList
  }
}
