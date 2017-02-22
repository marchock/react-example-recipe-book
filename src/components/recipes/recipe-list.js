import React, { Component } from 'react';
import { Link } from 'react-router';
import RecipeItem from './recipe-item';

class RecipeList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <Link to={'/recipes/new'} className="btn btn-success">New Recipe</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              <RecipeItem recipes={this.props.recipes} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeList;
