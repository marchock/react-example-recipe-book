import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RecipeList extends Component {

    renderRecipeList() {
        const imgStyles = { maxHeight: '50px'};
        const { recipes } = this.props;

        if (this.props.recipes) {
            return recipes.map(( { name, description, img }, index) => {
                return (
                    <Link
                        to={`/recipes/${index}`}
                        key={`recipes-${index}`}
                        className="list-group-item clearfix"
                    >
                        <div className="pull-left">
                            <h4 className="list-group-item-heading">{ name }</h4>
                            <p className="list-group-item-text">{ description }</p>
                        </div>
                        <span className="pull-right">
                            <img
                                src={ img }
                                className="img-responsive"
                                style={ imgStyles }
                            />
                        </span>
                    </Link>
                );
            });

        } else {
            return <p>No Recipes</p>;
        }
    }

    render() {
        return (
            <div className="col-md-5">
                <div className="recipe-list">
                    <div className="row">
                        <div className="col-xs-12">
                            <Link
                                to={'/recipes/new'}
                                className="btn btn-success"
                            >
                                New Recipe
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <ul className="list-group">
                                { this.renderRecipeList() }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeList;
