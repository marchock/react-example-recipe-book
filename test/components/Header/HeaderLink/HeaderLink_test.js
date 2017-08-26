import React from 'react';
import { renderComponent, expect } from '../../../test_helper';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import HeaderLink from '../../../../src/components/Header/HeaderLink/HeaderLink';


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

    it('should render an <a> tag if a link is specified', function () {
        expect(component.find('a').exists()).to.be.true;
    });

    it('should render a prop', function () {
        expect(component.props().children.props.to).to.equal(link);
    });
});
