

import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import { getFormTagComponent, renderIngredients, required } from './formInput';
import { FormFieldsRecipes } from './FormFields';
import Button from '../../../components/Button/Button';
import Row from '../../../components/Row/Row';

class RecipeForm extends Component {

    onSubmit(values) {
        this.props.onSubmit(values);
    }

    renderFields() {
        return FormFieldsRecipes.map(({ name, label, type, tag }) => {
            return (
                <Row key={ name }>
                    <Field
                        name={ name }
                        label={ label }
                        type={ type }
                        component={ getFormTagComponent(tag) }
                        validate={[ required ]}
                    />
                </Row>
            );
        });
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Row className="flex-end child-spacing" margin>
                    <Button href={ `/recipes`} danger>Cancel</Button>
                    <Button type="submit" primary>Save</Button>
                </Row>
                { this.renderFields() }
                <Row>
                    <hr />
                </Row>
                <Row>
                    <FieldArray name="ingredients" component={renderIngredients} />
                </Row>
            </form>
        );
    }
}


RecipeForm = reduxForm({
    form:'RecipeForm',
})(RecipeForm);

export default withRouter(RecipeForm);
