import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/shopping-list.actions';

import Ul from '../../../components/Ul/index';
import { ListItem } from '../../../components/ListItem/index';

class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.onClickItem = this.onClickItem.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  onClickItem(index) {
    const { initialize, shoppingListUpdate } = this.props;
    initialize(null);
    shoppingListUpdate(index);
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

ShoppingList = reduxForm({
  form: 'ShoppingListForm',
})(ShoppingList);

export default connect(mapStateToProps, actions)(ShoppingList);
