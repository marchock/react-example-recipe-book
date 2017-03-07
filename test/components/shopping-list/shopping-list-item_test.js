import { renderComponent , expect } from '../../test_helper';
import ShoppingListItem from '../../../src/components/shopping-list/shopping-list-item';

describe('ShoppingListItem' , () => {

  let component;

  beforeEach(() => {
    component = renderComponent(ShoppingListItem);
  });

  it('shows', () => {
    expect(component).to.exist;
  });
});
