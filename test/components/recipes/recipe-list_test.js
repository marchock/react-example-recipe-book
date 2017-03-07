import { renderComponent , expect } from '../../test_helper';
import RecipeList from '../../../src/components/recipes/recipe-list';

describe('Recipe List' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(RecipeList);
  });

  it('shows', () => {
    expect(component).to.exist;
  });
});
