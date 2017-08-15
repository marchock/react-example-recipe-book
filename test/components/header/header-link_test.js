import React from 'react';
import { renderComponent, expect } from '../../test_helper';
import { mount, render, shallow } from 'enzyme'
import { Link, Route, MemoryRouter } from 'react-router-dom';
import HeaderLink from '../../../src/components/header/header-link';


describe('<HeaderLink />', function () {

    let component;
    const link = '/recipes';

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

    it('has props "to" to equal "/recipes"', function () {
        expect(component.props().children.props.to).to.equal(link);
    });
});
