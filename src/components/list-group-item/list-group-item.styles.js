import { css } from 'styled-components';

const ListGroupItemStyles = css`
    position: relative;
    display: inline-block;
    padding: 10px 15px;
    margin: -6px 0;
    background-color: ${props => props.active ? 'red' : '#fff'};
    border: 1px solid #ddd;
    
    
    &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    
    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    
    &:hover {
        background-color: #f2f2f2;
    }
}
`;

export default ListGroupItemStyles;
