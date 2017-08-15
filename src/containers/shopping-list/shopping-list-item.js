import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/shopping-list.actions';

class ShoppingListItem extends Component {

    onClickItem(index) {
        this.props.resetForm();
        this.props.shoppingListUpdate(index);
    }

    renderButtonSelected(index) {
        if (this.props.shoppingList.item) {
            if (index === this.props.shoppingList.item.index) {
                return '--is-selected';
            } else {
                return '';
            }
        }
    }

    render() {
        const { index, item: { name, amount }} = this.props;

        return (
            <li
                onClick={ this.onClickItem.bind(this, index) }
                className={`${ this.renderButtonSelected(index) } list-group-item ingredient-item`}
            >
                { name } ({ amount })
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
