import React from 'react';

import RecipesNav from './RecipesNav';
import RecipesChildRoutes from './RecipesChildRoutes/index';
import Col from '../../components/Col/Col';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';

const RecipesPage = () => {
    return (
        <Row>
            <Col width={ 5 }>
                <Row margin padding>
                    <Button href="/recipes/new" primary>New Recipe</Button>
                </Row>
                <Row padding>
                    <RecipesNav />
                </Row>
            </Col>
            <Col width={ 7 }>
                <Row padding>
                    <RecipesChildRoutes />
                </Row>
            </Col>
        </Row>
    );
};

export default RecipesPage;
