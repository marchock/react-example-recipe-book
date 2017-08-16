import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from '../../components/layout/row/row';
import Col from '../../components/layout/col/col';
import H4 from '../../components/layout/h4/h4';
import P from '../../components/layout/p/p';
import ListGroupItem from '../../components/list-group-item/list-group-item';

class RecipeList extends Component {

    renderRecipeList() {
        const { recipes } = this.props;

        if (this.props.recipes) {
            console.log(this.props)

            return recipes.map(( { name, description, img }, index) => {
                return (
                    <ListGroupItem
                        active={ index === this.props.selectedRecipeID }
                        to={`/recipes/${index}`}
                        key={index}
                        className="list-group-item"
                    >
                        <Col width={ 12 }>
                            <H4>{ name }</H4>
                        </Col>
                        <Col width={ 9 }>
                            <P>{ description }</P>
                        </Col>
                        <Col width={ 3 }>
                            <img
                                src={ img }
                                className="img-responsive img-thumbnail"
                                width="100%"
                            />
                        </Col>
                    </ListGroupItem>
                );
            });

        } else {
            return <P>No Recipes</P>;
        }
    }

    render() {
        return (
            <Row>
                <Col width={ 12 }>
                    <ul className="list-group">
                        { this.renderRecipeList() }
                    </ul>
                </Col>
            </Row>
        );
    }
}

export default RecipeList;



