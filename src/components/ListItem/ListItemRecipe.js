import React, { Children } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ListItemStyles from './ListItem.styles';
import Col from '../col/col';
import H4 from '../h4/h4';
import Img from '../img/img';
import P from '../p/p';

const ListItemRecipe = ({ index, recipe }) => {
    const { name, description, img } = recipe;
    const ListItem = styled(Link)`${ListItemStyles}`;
    const ListItemRecipe = ListItem.extend`
        display: table;
    `;

    return (
        <ListItemRecipe
            to={`/recipes/${index}`}
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
