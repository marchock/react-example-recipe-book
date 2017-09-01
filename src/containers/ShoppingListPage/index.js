import React from 'react';
import ShoppingListForm from './ShoppingListForm';
import ShoppingList from './ShoppingList/index';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/index';

export default function ShoppingListPage() {

  return (
    <Row>
      <Col width={ 10 }>
        <ShoppingListForm />
        <ShoppingList />
      </Col>
    </Row>
  );
};
