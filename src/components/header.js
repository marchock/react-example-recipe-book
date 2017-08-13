import React from 'react';
import { Link, Route } from 'react-router-dom';

const Header = () => {

    const headerLink = (to, label) => {
        return (
            <Route children={({ location: { pathname } }) => {
                return (
                    <li className={  pathname === to ? 'active' : '' }>
                        <Link to={ to }>{ label }</Link>
                    </li>
                )
            }}/>
        )
    };

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link
                        className="recipe-book navbar-brand"
                        to={'/'}
                    >
                        Recipe Book
                    </Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        { headerLink('/recipes', 'Recipes') }
                        { headerLink('/shopping-list', 'Shopping List') }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

