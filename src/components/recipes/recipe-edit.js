import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './store/recipes_actions';
import _ from 'lodash';

import AddIngredientForm from './recipe-ingredient-add-form';
import { renderInput, renderTextarea } from '../form/form-inputs';

const required = value => value ? undefined : 'Required';

class RecipeEdit extends Component {

  onCancle(id) {
    return id ? `/recipes/${id}` : '/recipes';
  };

  componentWillMount() {
    // this will trigger mapStateToProps and update initialValues
    if (this.props.params) {
      this.props.fetchRecipe(this.props.params.id);
    } else {
      this.props.fetchNewRecipe();
    }
  }

  componentWillUnmount() {
    this.props.clearRecipe();
  }

  onSubmit(props) {
    props.ingredients = this.props.recipe.ingredients;

    if (this.props.params.id) {
      this.updateRecipes(this.props.params.id, props);
    } else {
      this.newRecipe(props);
    }
    const { id } = this.props.params;

  }

  newRecipe(props) {
    let copy = _.cloneDeep(this.props.recipes);
    copy.push(props);
    this.props.saveNewRecipe(copy);

    // redirect
    this.context.router.push('/recipes');
  }

  updateRecipes(id, props) {
    let copy = _.cloneDeep(this.props.recipes);
    copy[id] = props;
    this.props.updateRecipes(copy);

    // redirect
    this.context.router.push(`/recipes/${id}`);
  }

  onDeleteClick(ingredientId) {
    let copy = _.cloneDeep(this.props.recipe);

    copy.ingredients = copy.ingredients.filter((ingredient, i) => {
      if (ingredientId !== i) {
        return ingredient;
      }
    });

    this.props.deleteIngredient(copy);
  }

    render() {

        const { error, handleSubmit, pristine, reset, submitting } = this.props;
        const id = this.props.params ? this.props.params.id : null;
        const imgSrc = this.props.recipe ? this.props.recipe.img : '';
        const marginTop = { marginTop: 0 };

        const renderIngredients = () => {
            if (this.props.recipe) {
                return this.props.recipe.ingredients.map(({ name, amount }, i) => {
                    return (
                        <div className="row list-group" key={`ingrendient--${i}`}>
                            <div className="col-sm-5">
                                <span className="form-control">{ name }</span>
                            </div>
                            <div className="col-sm-5">
                                <span className="form-control">{ amount }</span>
                            </div>
                            <div className="col-sm-2">
                                <div className="btn btn-danger"
                                     onClick={this.onDeleteClick.bind(this, i)}>
                                    X
                                </div>
                            </div>
                        </div>
                    )
                });
            }
        };

        return (
            <div className="recipe-edit">
                <div className="row">
                    <div className="col-xs-12" style={marginTop}>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button type="submit" className="btn btn-success">Save</button>
                                    <Link to={this.onCancle(id)} className="btn btn-danger">Cancel</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <Field name="name"
                                           label="Title"
                                           type="text"
                                           component={renderInput}
                                           validate={[ required ]} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <Field name="img"
                                           label="Image Url"
                                           type="text"
                                           component={renderInput}
                                           validate={[ required ]} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="img">
                                        <img src={imgSrc} width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <Field name="description"
                                           label="Content"
                                           component={renderTextarea}
                                           className="form-control"
                                           validate={[ required ]} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">{ renderIngredients() }</div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xs-12">
                        <AddIngredientForm />
                    </div>
                </div>
            </div>
        );
    }
}


RecipeEdit = reduxForm({
    form:'RecipeEdit',
})(RecipeEdit);


function mapStateToProps(state) {
    return {
        recipe: state.recipes.recipe,
        recipes: state.recipes.recipes,
        initialValues: state.recipes.recipe
    };
}

export default connect(mapStateToProps, actions)(RecipeEdit);
