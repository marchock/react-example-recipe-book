import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button/Button';

const FormButtons = ({ isEdit, deleteIngredient, clearForm }) => {

  if (isEdit) {
    return (
      <div>
        <Button type="submit" primary>Save</Button>
        <Button
          type="button"
          onClick={ deleteIngredient() }
          danger
        >
          Delete Item
        </Button>
        <Button
          type="button"
          onClick={ clearForm() }
        >
          Clear
        </Button>
      </div>
    );
  } else {
    return <Button type="submit" primary>Add</Button>;
  }
};

export default FormButtons;

FormButtons.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
};

FormButtons.defaultProps = {
  editShoppingList: false,
};
