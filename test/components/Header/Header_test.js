import React from 'react';
import { renderComponent, expect } from '../../test_helper';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';

import Header from '../../../src/components/Header/Header';

describe('<Header/>', function () {
    it('should render three links', function () {
        const component = mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(component.find('a').length).to.equal(3);
    });
});
