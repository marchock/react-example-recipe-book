import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import Row from '../../../src/components/Row/Row';

describe('<Row />', () => {
    let component;
    const text = 'This is a test';

    beforeEach(() => {
        component = shallow(
            <Row>
                { text }
            </Row>
        );
    });

    it('should render its text', () => {
        expect(component.contains(text)).to.be.true;
    });
});
