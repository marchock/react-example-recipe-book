import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../../../components/Row/Row';
import { ListItem } from '../../../../../components/ListItem/index';
import Ul from '../../../../../components/Ul/index';
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

DetailIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

DetailIngredients.defaultProps = {
  ingredients: [],
};

