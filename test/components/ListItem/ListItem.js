import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import { ListItem } from '../../../src/components/ListItem';


describe('<ListItem />', () => {
    let component;
    const text = 'This is a test';

    beforeEach(() => {
        component = shallow(
            <ListItem>
                { text }
            </ListItem>
        );
    });

    it('should render its text', () => {
        expect(component.contains(text)).to.be.true;
    });
});
