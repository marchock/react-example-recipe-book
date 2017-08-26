import React, { Component } from 'react';

import ShoppingListForm from './ShoppingListForm';
import ShoppingList from './ShoppingList';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';

class ShoppingListPage extends Component {

    render() {
        return (
            <Row>
                <Col width={ 10 }>
                    <ShoppingListForm />
                    <ShoppingList />
                </Col>
            </Row>
        );
    }
}

export default ShoppingListPage
