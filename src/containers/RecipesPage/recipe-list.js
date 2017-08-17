import React, { Component } from 'react';

import Row from '../../components/Row/Row';
import P from '../../components/P/P';
import ListItemRecipe from '../../components/ListItem/ListItemRecipe';
import Ul from '../../components/Ul/Ul';
import Col from '../../components/Col/Col';
import Button from '../../components/Button/Button';

class RecipeList extends Component {

    render() {
        const { recipes } = this.props;

        if (!this.props.recipes) {
            return <P>No Recipes</P>
        }

        return (
            <Col width={ 5 }>
                <Row className="margin-vertical">
                    <Button href="/recipes/new" primary>New Recipe</Button>
                </Row>
                <Row>
                    <Ul>
                        { recipes.map(( recipe, index) => {
                            return (
                                <ListItemRecipe recipe={recipe} index={index} key={index}/>
                            )})
                        }
                    </Ul>
                </Row>
            </Col>
        );
    }
}

export default RecipeList;
