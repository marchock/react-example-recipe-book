import {SHOPPING_LIST_INITIAL_STATE} from './shopping_list_initial_state';
import { UPDATE_SHOPPING_LIST } from '../actions/index';

export default function(state = SHOPPING_LIST_INITIAL_STATE, action) {

  switch (action.type) {

  case UPDATE_SHOPPING_LIST:
    return action.payload;


  default:
    return state;
  }
}
