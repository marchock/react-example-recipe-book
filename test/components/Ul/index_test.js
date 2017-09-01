import React from 'react';
import { shallow } from 'enzyme';
import { renderComponent, expect } from '../../test_helper';
import Ul from '../../../src/components/Ul';

describe('<Ul />', () => {
  let component;
  const text = 'This is a test';

  beforeEach(() => {
      component = shallow(
        <Ul>
          { text }
        </Ul>
      );
    });

  it('should render its text', () => {
    expect(component.contains(text)).to.be.true;
  });
});
