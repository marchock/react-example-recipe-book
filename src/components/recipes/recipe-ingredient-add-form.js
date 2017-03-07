import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from './recipes_actions';
import _ from 'lodash';


const required = value => value ? undefined : 'Required';
const renderInput = ({ input, name, label, type, meta: { touched, error, warning } }) => (

  <div className={`col-md-5 ${touched && error ? 'has-danger' : ''}`}>
    <input className="form-control" {...input} name={name} placeholder={label} type={type}/>
    <div className="text-help">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class AddIngredientForm extends Component {

  onSubmit(props) {
    let copy = _.cloneDeep(this.props.recipe);
    copy.ingredients.push(props);
    this.props.addIngredient(copy);
    this.props.reset();
  }

  render() {

    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="form-group row">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field name="name"
               type="text"
               component={renderInput}
               validate={[ required ]} />

         <Field name="amount"
                type="text"
                component={renderInput}
                validate={[ required ]} />

          <div className="col-md-2">
            <button type="submit"className="btn btn-primary">+</button>
          </div>
        </form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    recipe: state.recipes.recipe,
  };
}

export default connect(mapStateToProps, actions)(reduxForm({
  form:'AddIngredientForm'
})(AddIngredientForm));
