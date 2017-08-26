import React from 'react';
import styled from 'styled-components';
import ListItemStyles from './ListItem.styles';

const Li = styled.li`${ListItemStyles}`;

const ListItem = Li.extend`
    display: flex;
    flex-direction: column;
`;

export default ListItem;
