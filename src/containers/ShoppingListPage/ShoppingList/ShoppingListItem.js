import React from 'react';
import ListItem from '../../../components/ListItem/ListItem';

const ShoppingListItem = (props) => {

    const onClickItem = (index) => {
        props.initialize(null);
        props.shoppingListUpdate(index);
    };

    const isSelected = (index) => {
        if (props.shoppingList.item) {
            if (index === props.shoppingList.item.index) {
                return '--is-selected';
            } else {
                return '';
            }
        }
    }

    const { ingredient, amount } = props.item;

    return (
        <ListItem
            onClick={ () => onClickItem(props.index) }
            className={`${isSelected(props.index)}`}
        >
            { ingredient } ({ amount })
        </ListItem>
    );
}

export default ShoppingListItem;
