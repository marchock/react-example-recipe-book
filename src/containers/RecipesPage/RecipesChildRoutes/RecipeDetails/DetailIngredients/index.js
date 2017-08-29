import React from 'react';

import Row from '../../../../../components/Row/Row';
import ListItem from '../../../../../components/ListItem/ListItem';
import Ul from '../../../../../components/Ul/Ul';

const DetailIngredients = (props) => {

    const { ingredients } = props;

    if (!ingredients) {
        return null;
    }

    return (
        <Row>
            <Ul>
                { ingredients.map((ingredient, i) => {
                    return (
                        <ListItem key={i}>
                            {ingredient.ingredient} ({ingredient.amount})
                        </ListItem>
                    );
                })}
            </Ul>
        </Row>
    );
};

export default DetailIngredients;
