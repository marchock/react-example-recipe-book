import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './shopping-list_actions';

class ShoppingListItem extends Component {

  onClickItem(index) {
    if (this.props.shoppingList.item && index === this.props.shoppingList.item.index) return;

    this.props.resetForm();
    this.props.updateShoppingListForm({
      shoppingList: this.props.shoppingList,
      index
    });
  }

  render() {
    const item = this.props.shoppingList.item;
    const index = this.props.index || 0;
    let name = '';
    let amount = '';
    let styles;

    if (this.props.item) {
      name = this.props.item.name || '';
      amount = this.props.item.amount|| '';
    }

    if (item) {
      styles = (item.index === index)
          ? { backgroundColor: 'gray' }
          :{ backgroundColor: 'white' }
    }

    return (
      <li onClick={this.onClickItem.bind(this, index)}
          style={styles}
          className="list-group-item">
        {name} ({amount})
      </li>
    )
  }
};

function mapStateToProps(state) {
  return {
    shoppingList: state.shoppingList
  };
}

export default connect(mapStateToProps, actions)(ShoppingListItem);
