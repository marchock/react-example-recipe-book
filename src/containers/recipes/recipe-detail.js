import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/recipe.actions';
import Button from '../../components/button/button';
import Row from '../../components/row/row';
import Col from '../../components/col/col';
import H1 from '../../components/h1/h1';
import P from '../../components/p/p';
import Img from '../../components/img/img';
import ListItem from '../../components/ListItem/ListItem';
import Ul from '../../components/Ul/Ul';


class RecipeDetail extends Component {

    onDeleteClick(id) {
        this.props.history.push('/recipes');
        this.props.recipeDelete(id);
    }

    render() {
        const { id } = this.props.match.params;

        const { img, name, description, ingredients } = this.props.recipeList[id];

        const renderIngredients = () => {
            return ingredients.map((ingredient, i) => {
                return (
                    <ListItem key={i}>
                        {ingredient.name} ({ingredient.amount})
                    </ListItem>
                );
            });
        };

        return (
            <div className="top-spacing">
                <Row>
                    <Img src={ img } />
                </Row>
                <Row>
                    <H1>{ name }</H1>
                </Row>
                <Row className="child-spacing flex-end margin-vertical">
                    <Button href="/shopping-list" primary>To Shopping List</Button>
                    <Button href={`/recipes/${id}/edit`}>Edit</Button>
                    <Button type="button" danger onClick={this.onDeleteClick.bind(this, id)}>Delete</Button>
                </Row>
                <Row>
                    <hr width="100%" />
                </Row>

                <Row className="margin-vertical">
                    <P>{ description }</P>
                </Row>
                <Row>
                    <Col width={ 12 }>
                        <Ul>
                            { renderIngredients() }
                        </Ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      recipeList: state.recipe.list,
  };
}

export default connect(mapStateToProps, actions)(RecipeDetail);
