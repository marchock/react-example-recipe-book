
import { mount, render, shallow } from 'enzyme';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { renderComponent , expect } from '../../test_helper';
import Recipes from '../../../src/components/recipes/recipes';
import RecipeEdit from '../../../src/components/recipes/recipe-edit';


// try enzyme to test react components

// https://www.youtube.com/watch?v=0_8rESjFcro
//https://medium.com/airbnb-engineering/enzyme-javascript-testing-utilities-for-react-a417e5e5090f#.tkrvi44s4


describe('Recipes' , () => {

  let component;

  beforeEach(() => {
    component = renderComponent(Recipes);
  });

  it('shows', () => {
    expect(component).to.exist;
  });

  it('shows at least one recipe', () => {
    expect(component.find('.list-group-item').length).to.not.equal(0);
  });


  // it('shows recipe-edit', () => {
  //   console.log('component', component)
  // //  expect(component.find('.recipe-edit')).to.exist;
  // });


  describe('Recipe Edit' , () => {
    let recipeEdit;

    beforeEach(() => {
      // const props = {
      //   recipe: {},
      //   recipes: [],
      //   params: {
      //     id: 0
      //   }
      // };

      recipeEdit = renderComponent(RecipeEdit);
    });
    //
    it('shows', () => {
      expect(recipeEdit).to.exist;
    });



    it('show three inputs', () => {

      expect(recipeEdit.find('input').length).to.equal(4);
    });



  });

  describe('New Recipes' , () => {

    it('show list', () => {

      //component.find('.btn.btn-success').simulate('click', { button: 0 });

      //expect(component.find('.btn.btn-success')).to.exist;

      //expect(component.find('.recipe-edit')).to.exist;
    });
  });



});
