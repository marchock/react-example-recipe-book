import React from 'react';
import PropTypes from 'prop-types';

import { ListItemLink } from '../../../../components/ListItem';
import Col from '../../../../components/Col';
import H4 from '../../../../components/H4';
import P from '../../../../components/P';
import Img from '../../../../components/Img';

function NavLink({ recipe: { name, description, img, _id } }) {
  return (
    <ListItemLink to={`/recipes/${_id}`}>
      <Col width={ 12 }>
        <H4>{ name }</H4>
      </Col>
      <Col width={ 9 }>
        <P className="padding-right">{ description }</P>
      </Col>
      <Col width={ 3 }>
        <Img src={ img } />
      </Col>
    </ListItemLink>
  );
}

export default NavLink;

NavLink.propTypes = {
  recipe: PropTypes.object.isRequired,
};

NavLink.defaultProps = {
  recipe: {},
};
