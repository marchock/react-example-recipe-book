import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../store/shopping-list.actions';

import Row from '../../../components/Row/Row';
import IngredientInputs from '../../RecipesPage/RecipesChildRoutes/RecipeForm/IngredientInputs';
import FormButtons from '.././ShoppingListForm/FormButtons';

class ShoppingListForm extends Component {

    onSubmit(ingredient) {
        if (this.props.shoppingList.item) {
            this.props.shoppingListSaveIngredient(ingredient);
            this.resetForm();
        } else {
            this.props.shoppingListAddIngredient(ingredient);
            this.props.reset();
        }
    }

    onClickClear() {
        this.props.shoppingListClearForm();
        this.resetForm();
    }

    onClickDelete() {
        this.props.shoppingListDelete(this.props.shoppingList.item.index);
        this.resetForm();
    }

    resetForm() {
        // forcing the initialValues to reset to null
        this.props.initialize(null);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Row margin>
                    <IngredientInputs col={ 3 } />
                </Row>
                <Row margin>
                    <FormButtons
                        isEdit={ this.props.shoppingList.edit }
                        deleteIngredient={ () => this.onClickDelete.bind(this) }
                        clearForm={ () => this.onClickClear.bind(this) }
                    />
                </Row>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        shoppingList: state.shoppingList,
        initialValues: state.shoppingList.item
    };
}

ShoppingListForm = reduxForm({
    form:'ShoppingListForm',
})(ShoppingListForm);

export default connect(mapStateToProps, actions)(ShoppingListForm);
