import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingListForm from './shopping-list-form';
import { updateShoppingList } from '../../actions/index';

import _ from 'lodash';

class ShoppingList extends Component {


  onClickItem(index) {
    let copy = _.cloneDeep(this.props.shoppingList);
    copy.edit = true;
    copy.item = {
      index: index,
      name: copy.list[index].name,
      amount: copy.list[index].amount
    };
    this.props.updateShoppingList(copy);
  }

  render() {

    const list = () => {
      return this.props.shoppingList.list.map((item, i) => {
        return (
          <li onClick={this.onClickItem.bind(this, i)}
              key={`item-${i}`}
              className="list-group-item">
            {item.name} ({item.amount})
          </li>
        )
      })
    }

    return (
      <div className="row">
        <div className="col-xs-10">
          <ShoppingListForm />
          <hr />
          <ul className="list-group">
            { list() }
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    shoppingList: state.shoppingList
  };
}

export default connect(mapStateToProps, {updateShoppingList})(ShoppingList);
