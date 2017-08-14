import _ from 'lodash';
import { expect } from '../../test_helper';

import * as actions from '../../../src/components/shopping-list/store/shopping-list.actions';
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


describe('Actions - Shopping List', () => {

  it('should create an action to ADD_SHOPPING_LIST_ITEM', () => {

    const expectedAction = {
      type: types.ADD_SHOPPING_LIST_ITEM,
      payload: {
        edit: false,
        item: null,
        list: _.cloneDeep(dummyData.list)
      }
    }
    expectedAction.payload.list.push(newItem);

    expect(actions.addShoppingListItem({
      shoppingList: dummyData,
      newItem
    }))
    .to.eql(expectedAction);
  });

  it('should create an action to DELETE_SHOPPING_LIST_ITEM', () => {
    const expectedAction = {
      type: types.DELETE_SHOPPING_LIST_ITEM,
      payload: {
        edit: false,
        item: null,
        list: [dummyData.list[0]]
      }
    }

    dummyData.item = { index: 1 }

    expect(actions.deleteShoppingListItem(dummyData)).to.eql(expectedAction);
  });

  it('should create an action to UPDATE_SHOPPING_LIST_ITEM', () => {

    const expectedAction = {
      type: types.UPDATE_SHOPPING_LIST_ITEM,
      payload: {
        edit: false,
        item: null,
        list: _.cloneDeep(dummyData.list)
      }
    }
    expectedAction.payload.list[1] = newItem;
    dummyData.item = {index: 1};

    expect(actions.updateShoppingListItem({
      shoppingList: dummyData,
      newItem
    }))
    .to.eql(expectedAction);
  });


  it('should create an action to CLEAR_SHOPPING_LIST_FORM', () => {
    const expectedAction = {
      type: types.CLEAR_SHOPPING_LIST_FORM,
      payload: {
        edit: false,
        item: null,
        list: dummyData.list
      }
    }

    expect(actions.clearShoppingListForm(dummyData))
      .to.eql(expectedAction);
  });


  it('should create an action to UPDATE_SHOPPING_LIST_FORM', () => {
    const expectedAction = {
      type: types.UPDATE_SHOPPING_LIST_FORM,
      payload: {
        edit: true,
        item: {
          index: 1,
          name: dummyData.list[1].name,
          amount: dummyData.list[1].amount
        },
        list: dummyData.list
      }
    }

    expect(actions.updateShoppingListForm({shoppingList: dummyData, index: 1}))
      .to.eql(expectedAction);
  });
})
