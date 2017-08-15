import React from 'react';
import { renderComponent, expect } from '../../test_helper';
import { mount, render, shallow } from 'enzyme'
import { Link, Route, MemoryRouter } from 'react-router-dom';

import Header from '../../../src/components/header/header';

describe('<Header/>', function () {
    it('exists', function () {
        const wrapper = mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(wrapper.find('header').exists()).to.be.true;
    });
});
