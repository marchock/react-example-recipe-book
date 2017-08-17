import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './store/shopping-list.actions';
import ShoppingListItem from './shopping-list-item';
import { renderInput } from '../../components/Form/FormInputs';
import Button from '../../components/Button/Button';

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
            <div className="row">
                <div className="col-xs-10">
                    <div className="row">
                        <div className="col-xs-12">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <div className="row">
                                    <Field name="name"
                                        type="text"
                                        col="col-sm-5"
                                        label="Name"
                                        component={renderInput}
                                        validate={[ required ]}
                                    />

                                    <Field name="amount"
                                        type="text"
                                        col="col-sm-2"
                                        label="Amount"
                                        component={renderInput}
                                        validate={[ required ]}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        { showHidebuttons() }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <ul className="list-group">
                        { renderShoppingList(this.props.shoppingList) }
                    </ul>
                </div>
            </div>
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