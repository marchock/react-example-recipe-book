import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from '../../components/row/row';
import Col from '../../components/col/col';
import H4 from '../../components/h4/h4';
import P from '../../components/p/p';
import Img from '../../components/img/img';

class RecipeLink extends Component {

    renderRecipeList() {
        const { recipes } = this.props;

        if (this.props.recipes) {
            return recipes.map(( { name, description, img }, index) => {
                return (
                    <Link
                        to={`/recipes/${index}`}
                        key={`recipes-${index}`}
                        className="recipe-list list-group-item clearfix"
                    >
                        <Col width={ 12 }>
                            <H4>{ name }</H4>
                        </Col>
                        <Col width={ 9 }>
                            <P>{ description }</P>
                        </Col>
                        <Col width={ 3 }>
                            <Img src={ img } />
                        </Col>
                    </Link>
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
