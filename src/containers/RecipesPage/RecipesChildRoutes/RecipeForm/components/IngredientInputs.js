import React from 'react';
import { Field } from 'redux-form';

import { FormFieldsIngredients } from './FormFields';
import Col from '../../../../../components/Col/index';
import { inputText } from './inputText';
import { required } from './formFunctions';

export default function IngredientInputs({ col }) {

  const inputs = FormFieldsIngredients
    .map(({ name, label }) => (
        <Col width={ col } key={ name }>
          <Field
            name={ name }
            type="text"
            label={ label }
            component={ inputText }
            validate={[required]}
          />
        </Col>
    ));

  return <div>{ inputs }</div>;
};
