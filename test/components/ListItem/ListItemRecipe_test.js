import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { renderComponent, expect } from '../../test_helper';
import ListItemRecipe from '../../../src/components/ListItem/ListItemRecipe';



describe('<ListItemRecipe />', () => {
    let component;
    const index = 0;
    const recipe = {
        name: 'name',
        description: 'description',
        img: 'img',
    };

    beforeEach(() => {
        component = mount(
            <MemoryRouter>
                <ListItemRecipe recipe={ recipe } index={ index } />
            </MemoryRouter>
        );
    });

    it('should render a recipe name into a <h4> tag', () => {
        expect(component.find('h4').text()).to.equal(recipe.name);
    });

    it('should render a recipe description into a <p> tag', () => {
        expect(component.find('p').text()).to.equal(recipe.description);
    });

    it('should render an <img> tag', () => {
        expect(component.find('img').length).to.equal(1);
    });

});
