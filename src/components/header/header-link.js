import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

const HeaderLink = (props) => {
    return (
        <Route children={({ location: { pathname } }) => {
            return (
                <li className={  pathname === props.to ? 'active' : '' }>
                    <Link to={ props.to }>
                        { Children.toArray(props.children) }
                    </Link>
                </li>
            )
        }}/>
    )
};

HeaderLink.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
};

export default HeaderLink;
