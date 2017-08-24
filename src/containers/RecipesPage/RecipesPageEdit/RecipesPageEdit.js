import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/recipe.actions';
import {
    getFormTagComponent, renderIngredients, renderInput, renderTextarea,
    required
} from '../../../components/Form/FormInputs';
import { FormFieldsRecipes } from '../../../components/Form/FormFields';
import Button from '../../../components/Button/Button';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import Img from '../../../components/Img/Img';
import FadeIn from '../../../components/Animations/FadeIn';

const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
`;


class RecipesPageEdit extends Component {

    componentWillMount() {
        this.props.recipeSelected(this.props.match.params.id);
    }

    onSubmit(values) {
        const id =  this.props.match.params.id;
        this.props.recipeUpdate({ values, id });
        this.props.history.push(`/recipes/${this.props.match.params.id}`);
    }

    renderFields() {
        return FormFieldsRecipes.map(({ name, label, type, tag }) => {
            return (
                <Row key={ name }>
                    <Col width={ 12 }>
                        <Field
                            name={ name }
                            label={ label }
                            type={ type }
                            component={ getFormTagComponent(tag) }
                            validate={[ required ]}
                        />
                    </Col>
                </Row>
            );
        });
    }

    render() {

        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        const imgSrc = this.props.recipe ? this.props.recipe.img : '';

        return (
            <RowAnimation>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Row className="flex-end child-spacing" margin>
                        <Button href={ `/recipes/${this.props.match.params.id}`} danger>Cancel</Button>
                        <Button type="submit" primary>Save</Button>
                    </Row>
                    { this.renderFields() }
                    <Row>
                        <hr />
                        <FieldArray name="ingredients" component={renderIngredients} />
                    </Row>
                </form>
            </RowAnimation>
        );
    }
}

RecipesPageEdit = reduxForm({
    form:'RecipeEdit',
    enableReinitialize : true,
})(RecipesPageEdit);


function mapStateToProps(state) {
    return {
        recipe: state.recipe.selected,
        recipes: state.recipe.list,
        initialValues: state.recipe.selected,
    };
}

export default connect(mapStateToProps, actions)(RecipesPageEdit);
