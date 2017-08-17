import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import H1 from '../../../src/components/H1/H1';

describe('<H1 />', () => {
    let component;
    const text = 'This is a test';

    beforeEach(() => {
        component = shallow(
            <H1>
                { text }
            </H1>
        );
    });

    it('should render its text', () => {
        expect(component.contains(text)).to.be.true;
    });
});
