import { UPDATE_SHOPPING_LIST } from '../actions/index';

const INITIAL_STATE = { list: [
  {
    name: 'yellow or orange peppers',
    amount: 2
  },
  {
    name: 'tsp chipotle paste',
    amount: '2'
  },
  {
    name: 'red wine vinegar',
    amount: '2 tbsp'
  },
  {
    name: 'cocoa powder',
    amount: '1 tbsp'
  },
  {
    name: 'dried oregano',
    amount: '1 tbsp'
  }
], item: null, edit: false };

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

  case UPDATE_SHOPPING_LIST:
    return action.payload;


  default:
    return state;
  }
}
