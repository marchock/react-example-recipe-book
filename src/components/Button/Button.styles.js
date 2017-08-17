import { css } from 'styled-components';

export const ButtonStyles = css`
    display: inline-block;
    padding: 10px 12px;
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
    background-color:  ${ props => {
        if (props['data-primary']) {
            return '#5cb85c';
        } else if (props['data-danger']) {
            return '#d9534f';
        } else {
            return '#2e6da4';
        }
    }};
    
    &:hover { 
        text-decoration: none;
        color: #fff;
        background-color:  ${ props => {
            if (props['data-primary']) {
                return '#449d44';
            } else if (props['data-danger']) {
                return '#c9302c';
            } else {
                return '#286090';
            }
        }};
    }
    
    &:focus {
        color: #fff;
        text-decoration: none;
    }
    
    &.selected { 
        border-color: rgba(175, 47, 47, 0.2); 
    }
`;
