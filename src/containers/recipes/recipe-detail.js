import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './store/recipe.actions';
import Button from '../../components/button/button';
import Row from '../../components/row/row';
import Col from '../../components/col/col';
import H1 from '../../components/h1/h1';
import P from '../../components/p/p';
import Img from '../../components/img/img';

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
                    <li className="list-group-item" key={i}>
                        {ingredient.name} ({ingredient.amount})
                    </li>
                );
            });
        };

        return (
            <div className="recipe-detail">
                <Row>
                    <Col width={ 12 }>
                        <Img src={ img } />
                    </Col>
                </Row>

                <Row>
                    <Col width={ 12 }>
                        <H1>{ name }</H1>
                    </Col>
                    <Col width={ 12 }>
                        <Button href="/shopping-list" primary>To Shopping List</Button>
                        <Button href={`/recipes/${id}/edit`}>Edit</Button>
                        <Button type="button" danger onClick={this.onDeleteClick.bind(this, id)}>Delete</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col width={ 12 }>
                        <P>{ description }</P>
                    </Col>
                </Row>
                <Row>
                    <Col width={ 12 }>
                        <ul className="list-group">
                            { renderIngredients() }
                        </ul>
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
