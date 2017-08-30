import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { FormFieldsRecipes } from './FormFields';
import Button from '../../../../components/Button/Button';
import Row from '../../../../components/Row/Row';
import { ingredientsArray } from './ingredientsArray';
import { getFormTagComponent, required } from './formFunctions';

class RecipeForm extends React.Component {

  onSubmit(values) {
    this.props.onSubmit(values);
  }

  renderFields() {
    return FormFieldsRecipes.map(({ name, label, type, tag }) => (
      <Row key={ name }>
        <Field
          name={ name }
          label={ label }
          type={ type }
          component={ getFormTagComponent(tag) }
          validate={[required]}
        />
      </Row>
    ));
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting, match } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Row className="flex-end child-spacing" margin>
          <Button
            href={ match.params.id ? `/recipes/${match.params.id}` : '/recipes'}
            danger
          >
            Cancel
          </Button>
          <Button type="submit" primary>Save</Button>
        </Row>
        { this.renderFields() }
        <Row>
            <hr />
        </Row>
        <Row>
          <FieldArray name="ingredients" component={ ingredientsArray } />
        </Row>
    </form>
    );
  }
}

RecipeForm = reduxForm({
    form: 'RecipeForm',
  })(RecipeForm);

export default withRouter(RecipeForm);
