import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './store/shopping-list_actions';
import ShoppingListItem from './shopping-list-item';

const required = value => value ? undefined : 'Required';

const renderInput = ({ input, name, col, label, type, meta: { touched, error, warning } }) => (
  <div className={`form-group ${col}`}>
    <label>{label}</label>
    <input className="form-control" {...input} name={name} placeholder={label} type={type}/>
    <div className="text-help">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class ShoppingList extends Component {

  onSubmit(newItem) {
    if (this.props.shoppingList.item !== null) {
      this.props.updateShoppingListItem({ shoppingList: this.props.shoppingList, newItem });
      this.resetForm();

    } else {
      this.props.addShoppingListItem({ shoppingList: this.props.shoppingList, newItem });
      this.props.reset();
    }
  }

  onClickClear() {
    this.props.clearShoppingListForm(this.props.shoppingList);
    this.resetForm();
  }

  onClickDelete() {
    this.props.deleteShoppingListItem(this.props.shoppingList);
    this.resetForm();
  }

  onClickItem(index) {
    if (this.props.shoppingList.item && index === this.props.shoppingList.item.index) return;
    this.resetForm();
    this.props.updateShoppingListForm({
      shoppingList: this.props.shoppingList,
      index
    });
  }

  resetForm() {
    // forcing the initialValues to reset to null
    this.props.initialize(null);
  }

  render() {
    const list = (shoppingList) => {
      return shoppingList.list.map((item, i) => {
        return (
          <ShoppingListItem
            item={item}
            selectedItem={shoppingList.item}
            index={i}
            resetForm={this.resetForm.bind(this)}
            key={`item-${i}`} />
        )
      });
    }

    const showHidebuttons = () => {
      if (this.props.shoppingList.edit) {
        return (
          <div>
            <button type="submit" className="btn btn-success">Save</button>
            <a onClick={this.onClickDelete.bind(this)} className="btn btn-danger" type="button">Delete Item</a>
            <a onClick={this.onClickClear.bind(this)} className="btn btn-primary" type="button">Clear</a>
          </div>
        );
      } else {
        return (
          <button className="btn btn-success" type="submit">Add</button>
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
                         validate={[ required ]} />

                   <Field name="amount"
                            type="text"
                            col="col-sm-2"
                            label="Amount"
                            component={renderInput}
                            validate={[ required ]} />
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
            { list(this.props.shoppingList) }
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

export default connect(mapStateToProps, actions)(reduxForm({
  form:'ShoppingListForm'
})(ShoppingList));
