import React, { Component } from 'react';
import { Link } from 'react-router';

class RecipeItem extends Component {

  getItems() {
    const imgStyles = {
      maxHeight: '50px'
    }

    return this.props.recipes.map((recipe, i) => {
      return (
        <Link to={`/recipes/${i}`} key={`recipes-${i}`} className="list-group-item clearfix">
          <div className="pull-left">
            <h4 className="list-group-item-heading">{recipe.name}</h4>
            <p className="list-group-item-text">{recipe.description}</p>
          </div>
          <span className="pull-right">
              <img src={recipe.img} className="img-responsive" style={imgStyles} />
          </span>
        </Link>
      );
    })
  }

  render() {
    return (
      <div>
        { this.getItems() }
      </div>
    );
  }
}

export default RecipeItem;
