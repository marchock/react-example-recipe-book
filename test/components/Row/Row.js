import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import Col from '../../../src/components/Col/Col';

describe('<Col />', () => {
    it('exists', () => {
        const component = shallow(
            <Col />
        );
        expect(component.find('div').exists()).to.be.true;
    });

    it('should render a prop', () => {
        const component = shallow(
            <Col width={ 12 } />
        );
        expect(component.prop('width')).to.equal(12);
    });
});
