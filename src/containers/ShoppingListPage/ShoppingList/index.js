import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { shoppingListUpdate } from '../store/shopping-list.actions';

import Ul from '../../../components/Ul/index';
import { ListItem } from '../../../components/ListItem/index';

class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  onClickItem(index) {
    this.props.initialize(null);
    this.props.updateShoppingList(index);
  };

  isSelected(index) {
    const { item } = this.props.shoppingList;
    return item ? (index === item.index) : false;
  };

  render() {
    const { list } = this.props.shoppingList;

    return (
      <Ul>
        { list.map(({ ingredient, amount }, index) => (
          <ListItem
            onClick={() => this.onClickItem(index)}
            isSelected={this.isSelected(index)}
            key={`item-${index}`}
          >
            { ingredient } ({ amount })
          </ListItem>
        ))}
      </Ul>
    );
  }
}

function mapStateToProps({ shoppingList }) {
  return {
    shoppingList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateShoppingList: (index) => dispatch(shoppingListUpdate(index)),
  };
}

ShoppingList = reduxForm({
  form: 'ShoppingListForm',
})(ShoppingList);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

ShoppingList.propTypes = {
  editShoppingList: PropTypes.bool.isRequired,
};

ShoppingList.defaultProps = {
  editShoppingList: false,
  ingredientSelected: null,
};
