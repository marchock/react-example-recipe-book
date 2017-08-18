import React from 'react';
import styled from 'styled-components';
import HeaderStyles from './Header.styles';
import HeaderLink from './HeaderLink/HeaderLink';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const StyledHeader = styled.header`${HeaderStyles}`;

const Header = () => {
    return (
        <StyledHeader>
            <HeaderLogo to="/">Recipe Book</HeaderLogo>
            <HeaderLink to="/recipes">Recipes</HeaderLink>
            <HeaderLink to="/shopping-list">Shopping List</HeaderLink>
        </StyledHeader>
    );
}

export default Header;

