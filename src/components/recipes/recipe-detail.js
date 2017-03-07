import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as actions from './recipes_actions';

class RecipeDetail extends Component {

  contextTypes: {
    router: React.PropTypes.object.isRequired
  }

  onDeleteClick(id) {
    this.props.deleteRecipe({
      recipes: this.props.recipes,
      payload: Number(id)
    });
    browserHistory.push('/recipes');
  }

  render() {
    const id = this.props.params ? this.props.params.id : 0;
    let imgSrc = '';
    let recipeName = '';
    let recipeDescription = '';
    let recipeIngredients = null;

    if (this.props.recipes.length > 0) {
      imgSrc = this.props.recipes[id].img;
      recipeName = this.props.recipes[id].name;
      recipeDescription = this.props.recipes[id].description;
      recipeIngredients = this.props.recipes[id].ingredients;
    }


    const getIngredients = () => {
      return recipeIngredients.map((ingredient, i) => {
        return (
          <li className="list-group-item" key={i}>
            {ingredient.name} ({ingredient.amount})
          </li>
        );
      });
    }

    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <img src={imgSrc} alt="" width="100%" className="img-responsive" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h1>{recipeName}</h1>
          </div>
          <div className="col-xs-12">
            <Link to={'/shopping-list'} className="btn btn-success">To Shopping List</Link>
            <Link  to={`/recipes/${id}/edit`} className="btn btn-primary">Edit</Link>
            <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, id)}>Delete</button>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-xs-12">
            <p>{recipeDescription}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              { getIngredients() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes.recipes };
}

export default connect(mapStateToProps, actions)(RecipeDetail);
