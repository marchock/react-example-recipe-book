import { renderComponent , expect } from '../../test_helper';
import ShoppingList from '../../../src/components/shopping-list/shopping-list';

describe('ShoppingList' , () => {

  let component;

  beforeEach(() => {
    component = renderComponent(ShoppingList);
  });

  it('show recipes component', () => {
    expect(component).to.exist;
  });
});
