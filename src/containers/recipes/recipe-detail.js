import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './store/recipe.actions';
import Button from '../../components/button/button';

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
                <div className="row">
                    <div className="col-xs-12">
                        <img
                            src={ img }
                            width="100%"
                            className="img-responsive img-thumbnail"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h1>{ name }</h1>
                    </div>
                    <div className="col-xs-12">
                        <Button href="/shopping-list" primary>To Shopping List</Button>
                        <Button href={`/recipes/${id}/edit`}>Edit</Button>
                        <Button type="button" danger onClick={this.onDeleteClick.bind(this, id)}>Delete</Button>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-xs-12">
                        <p>{ description }</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group">
                            { renderIngredients() }
                        </ul>
                    </div>
                </div>
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
