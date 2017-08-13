import { expect } from '../../test_helper';

import reducer from '../../../src/components/recipes/store/recipes_reducer';
import {RECIPES_INITIAL_STATE} from '../../../src/components/recipes/store/recipes_initial_state';
import * as types from '../../../src/components/recipes/store/recipes_types';


describe('Reducer - Recipes', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql(RECIPES_INITIAL_STATE)
  });


  it('should handle UPDATE_RECIPES', () => {
    expect(reducer([], {
      type: types.UPDATE_RECIPES,
      payload: []
    }))
    .to.eql({recipes: []})

    expect(reducer([], {
      type: types.UPDATE_RECIPES,
      payload: []
    })).to.eql({recipes: []})
  });


  it('should handle SAVE_NEW_RECIPE', () => {
    expect(reducer([], {
      type: types.SAVE_NEW_RECIPE,
      payload: []
    }))
    .to.eql({recipes: []})

    expect(reducer([], {
      type: types.SAVE_NEW_RECIPE,
      payload: []
    })).to.eql({recipes: []})
  });


  it('should handle DELETE_RECIPE', () => {
    expect(reducer([], {
      type: types.DELETE_RECIPE,
      payload: []
    }))
    .to.eql({recipes: []})

    expect(reducer([], {
      type: types.DELETE_RECIPE,
      payload: []
    })).to.eql({recipes: []})
  });

  it('should handle FETCH_RECIPE', () => {
    // expect(reducer(undefined, {
    //   type: types.FETCH_RECIPE,
    //   payload: 1
    // }))
    // .to.eql({recipe: {}})

    // expect(reducer([], {
    //   type: types.FETCH_RECIPE,
    //   payload: []
    // })).to.eql({recipes: []})
  });

  it('should handle FETCH_NEW_RECIPE', () => {
    // expect(reducer([], {
    //   type: types.FETCH_NEW_RECIPE,
    //   payload: []
    // }))
    // .to.eql({recipes: []})
    //
    // expect(reducer([], {
    //   type: types.FETCH_NEW_RECIPE,
    //   payload: []
    // })).to.eql({recipes: []})
  });

  it('should handle CLEAR_RECIPE', () => {
    // expect(reducer([], {
    //   type: types.CLEAR_RECIPE,
    //   payload: []
    // }))
    // .to.eql({recipes: []})
    //
    // expect(reducer([], {
    //   type: types.CLEAR_RECIPE,
    //   payload: []
    // })).to.eql({recipes: []})
  });

  it('should handle DELETE_INGREDIENT', () => {
    // expect(reducer([], {
    //   type: types.DELETE_INGREDIENT,
    //   payload: []
    // }))
    // .to.eql({recipes: []})
    //
    // expect(reducer([], {
    //   type: types.DELETE_INGREDIENT,
    //   payload: []
    // })).to.eql({recipes: []})
  });


  it('should handle ADD_INGREDIENT', () => {
    // expect(reducer([], {
    //   type: types.ADD_INGREDIENT,
    //   payload: []
    // }))
    // .to.eql({recipes: []})
    //
    // expect(reducer([], {
    //   type: types.ADD_INGREDIENT,
    //   payload: []
    // })).to.eql({recipes: []})
  });



})
