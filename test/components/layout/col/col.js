import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../../test_helper';
import Row from '../../../../src/components/layout/row/row';

describe('<Row />', () => {
    it('exists', () => {
        const component = shallow(
            <Row />
        );
        expect(component.find('div').exists()).to.be.true;
    });
});
