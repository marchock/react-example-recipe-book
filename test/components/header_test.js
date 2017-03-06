import React from 'react';
import { expect } from '../test_helper';
import { mount, render, shallow } from 'enzyme';

import Header from '../../src/components/header';


describe('Header component' , () => {
  const params = { pathname: '/' };
  const component = mount(<Header location={params} />);
  const wrapper = shallow(<Header location={params} />);
  const wr = render(<Header location={params} />);

  it('shows', () => {
    expect(component).to.exist;
  });

  it('shows three links', () => {
    expect(component.find('a').length).to.equal(3);
  });

  describe('Link "Recipe Book"' , () => {
    const link = wrapper.find('Link[to="/"]');
    it('shows text "Recipe Book"', () => {
      expect(link.props().children).to.contain('Recipe Book');
    });
    it('is linked to "/"', () => {
      expect(link.props().to).to.contain('/');
    });
  });

  describe('Link "Recipes"' , () => {
    const link = wrapper.find('Link[to="/recipes"]');
    it('shows text "Recipes"', () => {
      expect(link.props().children).to.contain('Recipes');
    });
    it('is linked to "/recipes"', () => {
      expect(link.props().to).to.contain('/recipes');
    });
  });

  describe('Link "Shopping List"' , () => {
    const link = wrapper.find('Link[to="/shopping-list"]');
    it('shows text "Recipes"', () => {
      expect(link.props().children).to.contain('Shopping List');
    });
    it('is linked to "/recipes"', () => {
      expect(link.props().to).to.contain('/shopping-list');
    });
  });
});
