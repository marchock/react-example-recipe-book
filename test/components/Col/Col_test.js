import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import Col from '../../../src/components/Col/Col';

describe('<Col />', () => {
    let component;
    const text = 'This is a test';
    const number = 12;

    beforeEach(() => {
        component = shallow(
            <Col width={ number }>
                { text }
            </Col>
        );
    });

    it('should render a prop', () => {
        expect(component.prop('width')).to.equal(number);
    });

    it('should render its text', () => {
        expect(component.contains(text)).to.be.true;
    });
});
