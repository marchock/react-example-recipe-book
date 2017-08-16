import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './store/recipe.actions';
import {renderIngredients, renderInput, renderTextarea, required} from '../../components/form/form-inputs';
import Button from '../../components/button/button';
import Row from '../../components/row/row';
import Col from '../../components/col/col';
import Img from '../../components/img/img';

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
                <Row>
                    <Col width={ 12 }>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Row>
                                <Col width={ 12 }>
                                    <Button href={ `/recipes/${this.props.match.params.id}`} danger>Cancel</Button>
                                    <Button type="submit" primary>Save</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col width={ 12 }>
                                    <Field name="name"
                                           label="Title"
                                           type="text"
                                           component={ renderInput }
                                           validate={[ required ]} />
                                </Col>
                            </Row>
                            <Row>
                                <Col width={ 12 }>
                                    <Field name="img"
                                           label="Image Url"
                                           type="text"
                                           component={renderInput}
                                           validate={[ required ]} />
                                </Col>
                            </Row>
                            <Row>
                                <Col width={ 12 }>
                                    <Img src={ imgSrc } />
                                </Col>
                            </Row>
                            <Row>
                                <Col width={ 12 }>
                                    <Field name="description"
                                           label="Content"
                                           component={renderTextarea}
                                           className="form-control"
                                           validate={[ required ]} />
                                </Col>
                            </Row>
                            <Row>
                                <hr />
                                <FieldArray name="ingredients" component={renderIngredients} />
                            </Row>
                        </form>
                    </Col>
                </Row>
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
