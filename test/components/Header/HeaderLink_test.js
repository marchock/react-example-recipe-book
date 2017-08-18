import React from 'react';
import { renderComponent, expect } from '../../test_helper';
import { mount, render, shallow } from 'enzyme'
import { Link, Route, MemoryRouter } from 'react-router-dom';
import HeaderLink from '../../../src/components/Header/HeaderLink/HeaderLink';


describe('<HeaderLink />', function () {

    let component;
    const link = '/RecipesPage';

    beforeEach(() => {
        component  = mount(
            <MemoryRouter>
                <HeaderLink to={ link } />
            </MemoryRouter>
        );
    });

    it('exists', function () {
        expect(component.find('a').exists()).to.be.true;
    });

    it('has props "to" to equal "/RecipesPage"', function () {
        expect(component.props().children.props.to).to.equal(link);
    });
});
