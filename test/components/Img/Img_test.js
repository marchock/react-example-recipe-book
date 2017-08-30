import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import Img from '../../../src/components/Img/index';

describe('<Img />', () => {
    it('exists', () => {
        const component = shallow(
            <Img />
        );
        expect(component.find('img').exists()).to.be.true;
    });
});


describe('<Img />', () => {
    let component;
    const src = 'image.png';

    beforeEach(() => {
        component = shallow(
            <Img src={ src } />
        );
    });

    it('should render a prop', () => {
        expect(component.prop('src')).to.equal(src);
    });
});
