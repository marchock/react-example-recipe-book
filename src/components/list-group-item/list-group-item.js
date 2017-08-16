import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ListGroupItemStyles from './list-group-item.styles';

const ListGroupItem = (props) => {
    const { to} = props;

    const ListGroupItem = styled(Link)`${ListGroupItemStyles}`;

    return (
        <ListGroupItem
            to={ to }
        >
            { Children.toArray(props.children) }
        </ListGroupItem>
    )
}

export default ListGroupItem;



