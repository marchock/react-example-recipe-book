import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import ListGroupItem from '../../../src/components/list-group-item/list-group-item';


describe('<ListGroupItem />', () => {
    it('exists', () => {
        const component = shallow(
            <ListGroupItem to="/recipes" />
        );

        console.log(component.find('a'))
        expect(component.find('a').exists()).to.be.true;
    });
});
