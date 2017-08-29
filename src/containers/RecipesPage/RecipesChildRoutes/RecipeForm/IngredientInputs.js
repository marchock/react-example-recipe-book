import React from 'react';
import { Field } from 'redux-form';

import { FormFieldsIngredients } from './FormFields';
import Col from '../../../../components/Col/Col';
import { inputText } from './inputText';
import { required } from './formFunctions';


const IngredientInputs = ({ col }) => {

    const inputs = FormFieldsIngredients
        .map(({ name, label }) => {
            return (
                <Col width={ col } key={ name }>
                    <Field
                        name={ name }
                        type="text"
                        label={ label }
                        component={ inputText }
                        validate={[ required ]}
                    />
                </Col>
            )
        });

    return <div>{ inputs }</div>;
};

export default IngredientInputs;
