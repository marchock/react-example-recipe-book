import React, { Component } from 'react';
import ShoppingListItem from './ShoppingListItem';
import Ul from '../../../components/Ul/Ul';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import * as actions from '../store/shopping-list.actions';

class ShoppingList extends Component {

    render() {
        const { shoppingList } = this.props;

        return (
            <Ul>
                { shoppingList.list.map((item, i) => {
                    return (
                        <ShoppingListItem
                            item={ item }
                            index={ i }
                            { ...this.props }
                            key={`item-${i}`}
                        />
                    )
                })}
            </Ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        shoppingList: state.shoppingList,
    };
}

ShoppingList = reduxForm({
    form:'ShoppingListForm',
})(ShoppingList);

export default connect(mapStateToProps, actions)(ShoppingList);

