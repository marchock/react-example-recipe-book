import React from 'react';
import { renderComponent, expect } from '../../../test_helper';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import HeaderLogo from '../../../../src/components/Header/HeaderLogo/HeaderLogo';



describe('<HeaderLogo />', function () {

    let component;
    const link = '/recipes';

    beforeEach(() => {
        component  = mount(
            <MemoryRouter>
                <HeaderLogo to={ link } />
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
