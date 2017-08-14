import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './store/recipe.actions';

import { renderInput, renderTextarea, renderIngredients, required } from '../form/form-inputs';



class RecipeNew extends Component {

    onSubmit(values) {
        this.props.recipeNew(values);
        this.props.history.push(`/recipes`);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="recipe-new" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="row">
                    <div className="col-xs-12">
                        <Link to="/recipes" className="btn btn-danger float-right">Cancel</Link>
                        <button type="submit" className="btn btn-success float-right">Save</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <Field name="name"
                               label="Title"
                               type="text"
                               component={ renderInput }
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
                            <img src={ this.props.formRecipeNewImage } width="100%" />
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
                    <div className="col-xs-12">
                        <hr />
                        <FieldArray name="ingredients" component={renderIngredients} />
                    </div>
                </div>
            </form>
        );
    }
}

RecipeNew = reduxForm({
    form:'RecipeNew',
})(RecipeNew);

const selector = formValueSelector('RecipeNew');

function mapStateToProps(state) {
    return {
        recipes: state.recipe.list,
        formRecipeNewImage: selector(state, 'img'),
    };
}

export default connect(mapStateToProps, actions)(RecipeNew);
