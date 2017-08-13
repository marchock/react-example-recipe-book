import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './store/recipes_actions';

class RecipeDetail extends Component {

    onDeleteClick(id) {
        this.props.deleteRecipe({
            recipes: this.props.recipes,
            payload: Number(id)
        });
    }

    render() {
        const { id } = this.props.match.params;
        const { img, name, description, ingredients   } = this.props.recipes[id];

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
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <img
                            src={ img }
                            width="100%"
                            className="img-responsive"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h1>{ name }</h1>
                    </div>
                    <div className="col-xs-12">
                        <Link
                            to={'/shopping-list'}
                            className="btn btn-success"
                        >
                            To Shopping List
                        </Link>
                        <Link
                            to={`/recipes/${id}/edit`}
                            className="btn btn-primary"
                        >
                            Edit
                        </Link>
                        <button
                            className="btn btn-danger"
                            onClick={this.onDeleteClick.bind(this, id)}
                        >
                            Delete
                        </button>
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
      recipes: state.recipes.recipes
  };
}

export default connect(mapStateToProps, actions)(RecipeDetail);
