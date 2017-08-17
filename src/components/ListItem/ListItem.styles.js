import { css } from 'styled-components';

const ListItemStyles = css`
    padding: 10px 15px;
    border: 1px solid #ddd;
    margin-bottom: -1px;
    
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

export default ListItemStyles;
