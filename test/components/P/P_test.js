import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import P from '../../../src/components/P/P';

describe('<P />', () => {
    it('exists', () => {
        const component = shallow(
            <P />
        );
        expect(component.find('p').exists()).to.be.true;
    });
});
