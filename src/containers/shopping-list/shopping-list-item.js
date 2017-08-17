import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/shopping-list.actions';
import List from '../../components/ListItem/ListItem';

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
            <List
                onClick={ this.onClickItem.bind(this, index) }
                className={`${ this.renderButtonSelected(index) }`}
            >
                { name } ({ amount })
            </List>
        )
    }
};

function mapStateToProps(state) {
  return {
    shoppingList: state.shoppingList
  };
}

export default connect(mapStateToProps, actions)(ShoppingListItem);
