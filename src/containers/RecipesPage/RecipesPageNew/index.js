import React, { Component } from 'react';
import Row from '../../../components/Row/Row';
import FadeIn from '../../../components/Animations/FadeIn';
import RecipeForm from '../RecipeForm/index';
import { connect } from 'react-redux';
import * as actions from '../store/recipe.actions';

const RowAnimation = Row.extend`
    animation: ${FadeIn} 0.4s forwards;
`;

class RecipesPageNew extends Component {

    submitForm(values) {
        this.props.recipeNew(values);
        this.props.history.push(`/recipes`);
    }

    render() {
        return (
            <RowAnimation>
                <RecipeForm onSubmit={ values => this.submitForm(values) } />
            </RowAnimation>
        );
    }
}

export default connect(null, actions)(RecipesPageNew);
