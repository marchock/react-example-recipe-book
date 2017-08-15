import React, { PropTypes, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: #fff;
    border-color: #4cae4c;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    text-decoration: none;

    &:hover { 
        background-color: #449d44;
        border-color: #398439;
        color: #fff;
        text-decoration: none;
    }
    &:focus {
        color: #fff;
        text-decoration: none;
    }
    
    &.selected { border-color: rgba(175, 47, 47, 0.2); }
`;

const PrimaryButton = StyledLink.extend`
    background-color: green;
`;

const DangerButton = StyledLink.extend`
    background-color: red;
`;


const Button = (props) => {

    if (props.primary) {
        return (
            <PrimaryButton to={ props.href }>
                { Children.toArray(props.children) }
            </PrimaryButton>
        )
    }

    if (props.danger) {
        return (
            <DangerButton to={ props.href }>
                { Children.toArray(props.children) }
            </DangerButton>
        )
    }
};



export default Button;
