import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';


class Header extends Component {

  contextTypes: {
    router: PropTypes
  }

  render() {

    const linkShoppingListActive = () => {
      if (this.props.location.pathname.match('shopping-list')) {
        return {backgroundColor: '#ccc'};
      }
    }

    const linkRecipesActive = () => {
      console.log('linkRecipesActive')
      if (this.props.location.pathname.match('recipes') ||
            this.props.location.pathname === '/') {
        return {backgroundColor: '#ccc'};
      }
    }


    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <Link className="navbar-brand" to={'/'}>Recipe Book</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li style={linkRecipesActive()}>
                <Link to={'/recipes'}>Recipes</Link>
              </li>
              <li style={linkShoppingListActive()}>
                <Link to={'/shopping-list'}>Shopping List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
