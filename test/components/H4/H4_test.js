import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import H4 from '../../../src/components/H4/H4';

describe('<H4 />', () => {
    let component;
    const text = 'This is a test';

    beforeEach(() => {
        component = shallow(
            <H4>
                { text }
            </H4>
        );
    });

    it('should render its text', () => {
        expect(component.contains(text)).to.be.true;
    });
});
