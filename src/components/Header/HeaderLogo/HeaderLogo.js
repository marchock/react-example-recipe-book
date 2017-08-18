import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogoStyles from './HeaderLogo.styles';

const LinkStyles = styled(Link)`${HeaderLogoStyles}`;

const HeaderLogo = (props) => {
    return (
        <LinkStyles to={ props.to }>
            { Children.toArray(props.children) }
        </LinkStyles>)
};

HeaderLogo.propTypes = {
    to: PropTypes.string,
};

export default HeaderLogo;
