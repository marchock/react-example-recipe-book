import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/recipe.actions';

import { renderIngredients, required, getFormTagComponent } from '../../../components/Form/FormInputs';
import Button from '../../../components/Button/Button';
import Row from '../../../components/Row/Row';
import FadeIn from '../../../components/Animations/FadeIn';
import { FormFieldsRecipes } from '../../../components/Form/FormFields';

const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
`;

class RecipesPageNew extends Component {
    onSubmit(values) {
        this.props.recipeNew(values);
        this.props.history.push(`/recipes`);
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
        const { handleSubmit } = this.props;

        return (
            <RowAnimation>
                <form
                    className="recipe-new"
                    onSubmit={handleSubmit(this.onSubmit.bind(this))}
                >
                    <Row className="flex-end child-spacing" margin>
                        <Button type="submit" primary>Save</Button>
                        <Button href="/recipes" danger>Cancel</Button>
                    </Row>
                    { this.renderFields() }
                    <Row>
                        <hr width="100%" />
                    </Row>
                    <Row>
                        <FieldArray name="ingredients" component={renderIngredients} />
                    </Row>
                </form>
            </RowAnimation>
        );
    }
}

RecipesPageNew = reduxForm({
    form:'RecipeNew',
})(RecipesPageNew);

const selector = formValueSelector('RecipeNew');

function mapStateToProps(state) {
    return {
        recipes: state.recipe.list,
        formRecipeNewImage: selector(state, 'img'),
    };
}

export default connect(mapStateToProps, actions)(RecipesPageNew);
