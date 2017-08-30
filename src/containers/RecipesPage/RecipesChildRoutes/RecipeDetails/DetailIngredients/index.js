import React from 'react';
import Row from '../../../../../components/Row/Row';
import ListItem from '../../../../../components/ListItem/ListItem';
import Ul from '../../../../../components/Ul/Ul';
import Loading from '../../../../../components/Loading/index';

/**
 * Recipe Detail Ingredients
 *
 * Load ingredients from an array
 * @param: Object - props
 */
export default function DetailIngredients(props) {

  const { ingredients } = props;

  if (!ingredients) {
    return <Loading />;
  }

  return (
    <Row>
      <Ul>
        { ingredients.map((ingredient, i) => (
            <ListItem key={i}>
              {ingredient.ingredient} ({ingredient.amount})
            </ListItem>
        ))}
      </Ul>
    </Row>
  );
};
