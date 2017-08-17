import { css } from 'styled-components';

export const ButtonStyles = css`
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    
    &:hover { 
        text-decoration: none;
        background-color: #286090;
        border-color: #204d74;
        color: #fff;
    }
    
    &:focus {
        color: #fff;
        text-decoration: none;
    }
    
    &.selected { 
        border-color: rgba(175, 47, 47, 0.2); 
    }
`;

export const PrimaryStyles = css`
    background-color: #5cb85c;
    border-color: #4cae4c;

    &:hover {
        background-color: #449d44;
        border-color: #398439;
    }
`;

export const DangerStyles = css`
    background-color: #d9534f;
    border-color: #d43f3a;

    &:hover {
        background-color: #c9302c;
        border-color: #ac2925;
    }
`;


