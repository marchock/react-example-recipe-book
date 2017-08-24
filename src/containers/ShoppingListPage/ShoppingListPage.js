import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './store/shopping-list.actions';
import ShoppingListItem from './shopping-list-item';
import Button from '../../components/Button/Button';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Ul from '../../components/Ul/Ul';
import {formInputText} from '../RecipesPage/RecipeForm/formInput';

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
        }

        const showHidebuttons = () => {
            if (this.props.shoppingList.edit) {
                return (
                    <div>
                        <Button type="submit" primary>Save</Button>
                        <Button
                            type="button"
                            onClick={this.onClickDelete.bind(this)}
                            danger
                        >
                            Delete Item
                        </Button>
                        <Button
                            type="button"
                            onClick={this.onClickClear.bind(this)}
                        >
                            Clear
                        </Button>
                    </div>
                );
            } else {
                return (
                    <Button type="submit" primary>Add</Button>
                );
            }
        };

        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <Row>
                <Col width={ 10 }>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Row margin>
                            <Col width={ 3 }>
                                <Field
                                    name="name"
                                    type="text"
                                    col="col-sm-5"
                                    label="Name"
                                    component={formInputText}
                                    validate={[ required ]}
                                />
                            </Col>
                            <Col width={ 3 }>
                                <Field
                                    name="amount"
                                    type="text"
                                    col="col-sm-2"
                                    label="Amount"
                                    component={formInputText}
                                    validate={[ required ]}
                                />
                            </Col>
                        </Row>
                        <Row margin>
                            { showHidebuttons() }
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
