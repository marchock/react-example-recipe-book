import React, { Component } from 'react';

import Row from '../../components/row/row';
import P from '../../components/p/p';
import ListItemRecipe from '../../components/ListItem/ListItemRecipe';
import Ul from '../../components/Ul/Ul';
import Col from '../../components/col/col';
import Button from '../../components/button/button';

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
