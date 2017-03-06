import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { deleteRecipe } from '../../actions/index';

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
    const { id } = this.props.params;
    const recipe = this.props.recipes[id];

    const getIngredients = () => {
      return recipe.ingredients.map((ingredient, i) => {
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
            <img src={recipe.img} alt="" width="100%" className="img-responsive" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h1>{recipe.name}</h1>
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
            <p>{recipe.description}</p>
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

export default connect(mapStateToProps, {deleteRecipe})(RecipeDetail);
