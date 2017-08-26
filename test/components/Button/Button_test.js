import { renderComponent, expect } from '../../test_helper';
import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import Button from '../../../src/components/Button/Button';


describe('<Button/>', function () {

    let component;

    it("should render an <a> tag if a link is specified", () => {
        component = mount(
            <MemoryRouter>
                <Button href="/" />
            </MemoryRouter>
        );
        expect(component.find('a').length).to.equal(1);
    });

    it("should render an <button> tag if a type is specified", () => {
        component = mount(
            <MemoryRouter>
                <Button type="button" />
            </MemoryRouter>
        );
        expect(component.find('button').length).to.equal(1);
    });
});
