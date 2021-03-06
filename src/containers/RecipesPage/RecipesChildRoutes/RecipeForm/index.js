import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import Button from '../../../../components/Button/Button';
import Row from '../../../../components/Row/Row';
import Hr from '../../../../components/Hr/index';

import { FormFieldsRecipes } from './components/FormFields';
import { ingredientsArray } from './components/ingredientsArray';
import { getFormTagComponent, required } from './components/formFunctions';

class RecipeForm extends React.Component {

  onSubmit(values) {
    this.props.onSubmit(values);
  }

  render() {
    const { handleSubmit, match } = this.props;
    const _id = match.params.id;
    const url = _id ? `/recipes/${_id}` : '/recipes';

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Row className="flex-end child-spacing" margin>
          <Button href={ url } danger>Cancel</Button>
          <Button type="submit" primary>Save</Button>
        </Row>

        { FormFieldsRecipes.map(({ name, label, type, tag }) => (
          <Row key={ name }>
            <Field
              name={ name }
              label={ label }
              type={ type }
              component={ getFormTagComponent(tag) }
              validate={[required]}
            />
          </Row>
        ))}

        <Hr />
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

RecipeForm.propTypes = {};

RecipeForm.defaultProps = {};
