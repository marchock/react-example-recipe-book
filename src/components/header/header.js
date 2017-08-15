import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from './header-link';

const Header = () => {

    return (
        <header className="navbar navbar-default">
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
                        <HeaderLink to="/recipes">Recipes</HeaderLink>
                        <HeaderLink to="/shopping-list">Shopping List</HeaderLink>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;

