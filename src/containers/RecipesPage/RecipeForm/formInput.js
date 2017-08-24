import React from 'react';
import { Field } from 'redux-form';
import Button from '../../../components/Button/Button';
import Col from '../../../components/Col/Col';
import FormErrorMessage from '../../../components/Form/ErrorMessage/ErrorMessage';
import Fieldset from '../../../components/Form/Fieldset/Fieldset';
import Input from '../../../components/Form/Input/Input';
import Label from '../../../components/Form/Label/Label';
import Row from '../../../components/Row/Row';
import recipeFormTextarea from './recipeFormTextarea';


export const getFormTagComponent = (tag) => {
    switch (tag) {
        case 'input':
            return formInputText;
        case 'textarea':
            return recipeFormTextarea;
    }
};

export const required = value => value ? undefined : 'Required';

export const formInputText = ({ input, name, label, placeholder, type, meta }) => (
    <Fieldset>
        <Label show={ label }>{ label }</Label>
        <Input {...input} name={name} label={label} placeholder={placeholder} type={type} meta={ meta } />
        <FormErrorMessage meta={ meta } />
    </Fieldset>
);


export const renderIngredients = ({ fields, meta: { error, submitFailed } }) => {

    const addNewIngredient = () => {
        fields.push({})
    };

    return (
        <Row>
            {fields.map((ingredient, index) =>
                <Row key={index}>
                    <Col width={ 5 }>
                        <Field
                            name={`${ingredient}.name`}
                            type="text"
                            placeholder="Ingredient name"
                            component={ formInputText }
                            validate={[ required ]} />
                    </Col>
                    <Col width={ 1 }>&nbsp;</Col>
                    <Col width={ 5 }>
                        <Field
                            name={`${ingredient}.amount`}
                            type="text"
                            placeholder="Amount"
                            component={ formInputText }
                            validate={[ required ]} />
                    </Col>
                    <Col width={ 1 }>
                        <Fieldset>
                            <Button type="submit" danger onClick={() => fields.remove(index)} right>-</Button>
                        </Fieldset>
                    </Col>
                </Row>
            )}

            <Row className="flex-end">
                <Button type="button" onClick={ addNewIngredient }>Add new ingredient</Button>
            </Row>
        </Row>
    );
};
