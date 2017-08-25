import { renderComponent, expect } from '../../test_helper';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import RecipesPage from '../../../src/containers/RecipesPage/index';
import { Provider } from 'react-redux';


import createHistory from 'history/createBrowserHistory'
import {applyMiddleware, createStore} from 'redux';
import reducers from '../../../src/reducers';
const history = createHistory()
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

describe('<RecipesPage />', function () {

    let component;

    beforeEach(() => {
        component = mount(
            <Provider store={ store }>
                <Router history={ history }>
                    <div>
                        <MemoryRouter initialEntries={[ '/recipes' ]}>
                            <Route path="/recipes" component={ RecipesPage } />
                        </MemoryRouter>
                    </div>
                </Router>
            </Provider>
        )
    });

    it("has rendered six recipe links", () => {
        // console.log(component.html())
        expect(component.find('a').length).to.equal(6);
    });

});
