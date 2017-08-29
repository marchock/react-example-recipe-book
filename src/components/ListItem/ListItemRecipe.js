import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ListItemStyles from './ListItem.styles';
import Col from '../Col/Col';
import H4 from '../H4/H4';
import Img from '../Img/Img';
import P from '../P/P';

const ListItemRecipe = ({ recipe }) => {
    const { name, description, img, _id } = recipe;
    const ListItem = styled(Link)`${ListItemStyles}`;
    const ListItemRecipe = ListItem.extend`
        display: table;
    `;

    return (
        <ListItemRecipe
            to={`/recipes/${_id}`}
        >
            <Col width={ 12 }>
                <H4>{ name }</H4>
            </Col>
            <Col width={ 9 }>
                <P className="padding-right">{ description }</P>
            </Col>
            <Col width={ 3 }>
                <Img src={ img } />
            </Col>
        </ListItemRecipe>
    )
}

export default ListItemRecipe;
