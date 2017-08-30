import React from 'react';
import styled from 'styled-components';
import ListItemStyles from './ListItem.styles';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  ${ListItemStyles}
`;

export const ListItemLink = styled(Link)`
  display: table;
  ${ListItemStyles}
`;

