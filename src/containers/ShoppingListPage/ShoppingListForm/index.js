import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { shoppingListSaveIngredient, shoppingListAddIngredient, shoppingListClearForm, shoppingListDelete } from '../store/shopping-list.actions';

import Row from '../../../components/Row/Row';
import IngredientInputs from '../../RecipesPage/RecipesChildRoutes/RecipeForm/components/IngredientInputs';
import FormButtons from '.././ShoppingListForm/FormButtons';

class ShoppingListForm extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit(ingredient) {
    const { ingredientSelected } = this.props;

    if (ingredientSelected) {
      this.props.saveIngredient(ingredient);
    } else {
      this.props.addIngredient(ingredient);
    }

    this.props.reset();
  }

  onClickClear() {
    this.props.clearForm();
    this.resetForm();
  }

  onClickDelete() {
    this.props.deleteIngredient(this.props.ingredientSelected.index);
    this.resetForm();
  }

  resetForm() {
    // forcing the initialValues to reset to null
    this.props.initialize(null);
  }

  render() {
    const { handleSubmit, editShoppingList } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Row margin>
          <IngredientInputs col={ 3 } />
        </Row>
        <Row margin>
          <FormButtons
            isEdit={ editShoppingList }
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
    editShoppingList: state.shoppingList.edit,
    ingredientSelected: state.shoppingList.item,
    initialValues: state.shoppingList.item,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveIngredient: (ingredient) => dispatch(shoppingListSaveIngredient(ingredient)),
    addIngredient: (ingredient) => dispatch(shoppingListAddIngredient(ingredient)),
    deleteIngredient: (index) => dispatch(shoppingListDelete(index)),
    clearForm: (ingredient) => dispatch(shoppingListClearForm()),
  };
}

ShoppingListForm = reduxForm({
  form: 'ShoppingListForm',
})(ShoppingListForm);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListForm);

ShoppingListForm.propTypes = {
  editShoppingList: PropTypes.bool.isRequired,
  ingredientSelected: PropTypes.object,
  saveIngredient: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
};

ShoppingListForm.defaultProps = {
  editShoppingList: false,
  ingredientSelected: null,
};
