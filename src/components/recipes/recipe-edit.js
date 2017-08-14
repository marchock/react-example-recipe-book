import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './store/recipe.actions';
import {renderIngredients, renderInput, renderTextarea, required} from '../form/form-inputs';

class RecipeEdit extends Component {

    componentWillMount() {
        this.props.recipeSelected(this.props.match.params.id);
    }

    onSubmit(values) {
        const id =  this.props.match.params.id;
        this.props.recipeUpdate({ values, id });
        this.props.history.push(`/recipes/${this.props.match.params.id}`);
    }

    render() {

        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        const imgSrc = this.props.recipe ? this.props.recipe.img : '';

        return (
            <div className="recipe-edit">
                <div className="row">
                    <div className="col-xs-12">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="row">
                                <div className="col-xs-12">
                                    <Link
                                        to={ `/recipes/${this.props.match.params.id}` }
                                        className="btn btn-danger float-right"
                                    >
                                        Cancel
                                    </Link>
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
                                        <img src={ imgSrc } width="100%" />
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
                                <hr />
                                <FieldArray name="ingredients" component={renderIngredients} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

RecipeEdit = reduxForm({
    form:'RecipeEdit',
    enableReinitialize : true,
})(RecipeEdit);


function mapStateToProps(state) {
    return {
        recipe: state.recipe.selected,
        recipes: state.recipe.list,
        initialValues: state.recipe.selected,
    };
}

export default connect(mapStateToProps, actions)(RecipeEdit);
