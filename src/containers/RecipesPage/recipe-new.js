import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './store/recipe.actions';

import { renderInput, renderTextarea, renderIngredients, required } from '../../components/Form/FormInputs';
import Button from '../../components/Button/Button';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';

class RecipeNew extends Component {

    onSubmit(values) {
        this.props.recipeNew(values);
        this.props.history.push(`/recipes`);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="recipe-new" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Row className="margin-vertical flex-end child-spacing">
                    <Button type="submit" primary>Save</Button>
                    <Button href="/recipes" danger>Cancel</Button>
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
                        <div className="img">
                            <img src={ this.props.formRecipeNewImage } width="100%" />
                        </div>
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
                    <Col width={ 12 }>
                        <hr />
                        <FieldArray name="ingredients" component={renderIngredients} />
                    </Col>
                </Row>
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
