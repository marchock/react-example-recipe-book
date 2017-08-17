import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import Img from '../../../src/components/Img/Img';

describe('<Img />', () => {
    it('exists', () => {
        const component = shallow(
            <Img />
        );
        expect(component.find('img').exists()).to.be.true;
    });
});
