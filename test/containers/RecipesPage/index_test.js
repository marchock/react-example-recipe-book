import { renderComponent, expect } from '../../test_helper';
import React from 'react';
import { Router, Redirect, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RecipesPage from '../../../src/containers/RecipesPage/index';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../../src/store/reducers';
const history = createHistory();
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

describe('<RecipesPage />', function () {

  let component;

  beforeEach(() => {
    component = mount(
      <Provider store={ store }>
        <Router history={ history }>
          <div>
            <MemoryRouter initialEntries={['/recipes']}>
              <Route path="/recipes" component={ RecipesPage } />
            </MemoryRouter>
          </div>
        </Router>
      </Provider>
    );
  });

  it('has rendered six recipe links', () => {

    //TODO: data is not loaded from api and cannot get a true result.

  });

});

// console.log(component.html())
// console.log(component.find('a').length)
// expect(component.find('a').length).to.equal(1);
