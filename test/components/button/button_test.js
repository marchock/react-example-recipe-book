import { renderComponent, expect } from '../../test_helper';
import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import Button from '../../../src/components/button/button';


describe('<Button/>', function () {

    let component;

    beforeEach(() => {
        component = mount(
            <MemoryRouter>
                <Button type="button" />
            </MemoryRouter>
        );
    });

    it('exists', function () {
        expect(component.find('button').exists()).to.be.true;
    });
});
