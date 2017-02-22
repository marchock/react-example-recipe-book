import React, { Component } from 'react';
import RecipeList from './recipe-list';
import { connect } from 'react-redux';

class Recipes extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-md-5">
          <RecipeList recipes={this.props.recipes} />
        </div>
        <div className="col-md-7">
          { this.props.children ? this.props.children : <h1>Please select a Recipe</h1> }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes.recipes };
}

export default connect(mapStateToProps)(Recipes)
