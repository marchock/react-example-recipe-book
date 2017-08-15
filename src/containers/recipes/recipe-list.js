import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeList extends Component {

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
                        <div className="col-xs-12">
                            <h4 className="list-group-item-heading">{ name }</h4>
                        </div>
                        <div className="col-xs-9">
                            <p className="list-group-item-text">{ description }</p>
                        </div>
                        <div className="col-xs-3">
                            <img
                                src={ img }
                                className="img-responsive img-thumbnail"
                                width="100%"
                            />
                        </div>
                    </Link>
                );
            });

        } else {
            return <p>No Recipes</p>;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        { this.renderRecipeList() }
                    </ul>
                </div>
            </div>
        );
    }
}

export default RecipeList;
