import { UPDATE_SHOPPING_LIST } from '../actions/index';

const INITIAL_STATE = { list: [{name: 'cabbage', amount: 2}], item: null, edit: false };

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

  case UPDATE_SHOPPING_LIST:
    return action.payload;


  default:
    return state;
  }
}
