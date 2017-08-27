import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../store/recipe.actions';

import RecipeForm from '../RecipeForm';

import Row from '../../../components/Row/Row';
import FadeIn from '../../../components/Animations/FadeIn';

const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
`;

class RecipesPageEdit extends Component {

    componentWillReceiveProps(nextProps) {
        if (!nextProps.recipe && nextProps.recipes.length > 0) {
            this.props.recipeSelected(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.recipeUnselect();
    }

    submitForm(values) {
        this.props.recipeUpdate({ values });
        this.props.history.push(`/recipes/${this.props.match.params.id}`);
    }

    render() {
        return (
            <RowAnimation>
                <RecipeForm onSubmit={ values => this.submitForm(values) } />
            </RowAnimation>
        );
    }
}

RecipesPageEdit = reduxForm({
    form:'RecipeForm',
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
