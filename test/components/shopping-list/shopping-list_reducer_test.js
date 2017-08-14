import _ from 'lodash';
import { expect } from '../../test_helper';

import reducer from '../../../src/components/shopping-list/store/shopping-list.reducer';
import { initialState } from '../../../src/components/shopping-list/store/shopping-list_initial_state';
import * as types from '../../../src/components/shopping-list/store/shopping-list.types';

let dummyData = {
  list: [{
    name: 'peppers',amount: 2
  },{
    name: 'carrots',amount: '2'
  }],
  item: null,
  edit: false
};

const newItem = {name: 'apple',amount: 2};

describe('Reducer - Shopping List', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql(initialState)
  });


  it('should handle ADD_SHOPPING_LIST_ITEM', () => {
    expect(reducer([], {
      type: types.ADD_SHOPPING_LIST_ITEM,
      payload: dummyData
    }))
    .to.eql(dummyData)

    expect(reducer(dummyData, {
      type: types.ADD_SHOPPING_LIST_ITEM,
      payload: dummyData
    })).to.eql(dummyData)
  });


  it('should handle DELETE_SHOPPING_LIST_ITEM', () => {
    expect(reducer([], {
      type: types.DELETE_SHOPPING_LIST_ITEM,
      payload: dummyData
    }))
    .to.eql(dummyData)

    expect(reducer(dummyData, {
      type: types.DELETE_SHOPPING_LIST_ITEM,
      payload: dummyData
    })).to.eql(dummyData)
  });

  it('should handle UPDATE_SHOPPING_LIST_ITEM', () => {
    expect(reducer([], {
      type: types.UPDATE_SHOPPING_LIST_ITEM,
      payload: dummyData
    }))
    .to.eql(dummyData)

    expect(reducer(dummyData, {
      type: types.UPDATE_SHOPPING_LIST_ITEM,
      payload: dummyData
    })).to.eql(dummyData)
  });


  it('should handle CLEAR_SHOPPING_LIST_FORM', () => {
    let shoppingList = _.cloneDeep(dummyData);
    shoppingList.edit = true;
    shoppingList.item = shoppingList.list[0];
    delete shoppingList.list;

    expect(reducer([], {
      type: types.CLEAR_SHOPPING_LIST_FORM,
      payload: shoppingList
    }))
    .to.eql(shoppingList)

    expect(reducer(shoppingList, {
      type: types.CLEAR_SHOPPING_LIST_FORM,
      payload: shoppingList
    })).to.eql(shoppingList)
  });

  it('should handle UPDATE_SHOPPING_LIST_FORM', () => {
    let shoppingList = _.cloneDeep(dummyData);
    shoppingList.edit = true;
    shoppingList.item = shoppingList.list[0];
    delete shoppingList.list;

    expect(reducer([], {
      type: types.UPDATE_SHOPPING_LIST_FORM,
      payload: shoppingList
    }))
    .to.eql(shoppingList)

    expect(reducer(shoppingList, {
      type: types.UPDATE_SHOPPING_LIST_FORM,
      payload: shoppingList
    })).to.eql(shoppingList)
  });

});
