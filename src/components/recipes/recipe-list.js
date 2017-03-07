import React, { Component } from 'react';
import { Link } from 'react-router';


class RecipeList extends Component {

  getList() {
    const imgStyles = { maxHeight: '50px'}

    if (this.props.recipes) {
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
    } else {
      return (<p>No Recipes</p>);
    }

  }

  render() {
    return (
      <ul className="list-group">
        { this.getList() }
      </ul>
    );
  }
}

export default RecipeList;
