import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import H4 from '../../../src/components/h4/h4';

describe('<H4 />', () => {
    it('exists', () => {
        const component = shallow(
            <H4 />
        );
        expect(component.find('h4').exists()).to.be.true;
    });
});
