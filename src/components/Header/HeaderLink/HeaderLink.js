import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLinkStyles from './HeaderLink.styles';
const LinkStyles = styled(Link)`${HeaderLinkStyles}`;

const HeaderLink = (props) => {
    return (
        <Route children={({ location: { pathname } }) => {
            return (
                <LinkStyles to={ props.to } data-pathname={ pathname }>
                    { Children.toArray(props.children) }
                </LinkStyles>
            );
        }}/>
    )
};

HeaderLink.propTypes = {
    to: PropTypes.string,
};

export default HeaderLink;
