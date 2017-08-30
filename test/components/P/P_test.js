import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import P from '../../../src/components/P/index';

describe('<P />', () => {
    let component;
    const text = 'This is a test';

    beforeEach(() => {
        component = shallow(
            <P>
                { text }
            </P>
        );
    });

    it('should render its text', () => {
        expect(component.contains(text)).to.be.true;
    });
});
