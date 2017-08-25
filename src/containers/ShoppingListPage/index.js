import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './store/shopping-list.actions';
import ShoppingListItem from './shopping-list-item';
import Button from '../../components/Button/Button';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Ul from '../../components/Ul/Ul';
import { formInputText } from '../RecipesPage/RecipeForm/inputText';
import IngredientInputs from '../RecipesPage/RecipeForm/IngredientInputs';
import FormButtons from './ShoppingListForm/FormButtons';

const required = value => value ? undefined : 'Required';

class ShoppingListPage extends Component {

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
        const renderShoppingList = (shoppingList) => {
            return shoppingList.list.map((item, i) => {

                return (
                    <ShoppingListItem
                        item={ item }
                        selectedItem={ shoppingList.item }
                        index={ i }
                        resetForm={ this.resetForm.bind(this) }
                        key={`item-${i}`}
                    />
                )
            });
        };

        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <Row>
                <Col width={ 10 }>
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
                    <Ul>
                        { renderShoppingList(this.props.shoppingList) }
                    </Ul>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        shoppingList: state.shoppingList,
        initialValues: state.shoppingList.item
    };
}

ShoppingListPage = reduxForm({
    form:'ShoppingListForm',
})(ShoppingListPage);

export default connect(mapStateToProps, actions)(ShoppingListPage);
