import React from 'react';
import { Field } from 'redux-form';
import Button from '../Button/Button';
import Col from '../Col/Col';
import FormErrorMessage from './ErrorMessage/ErrorMessage';
import Fieldset from './Fieldset/Fieldset';
import Input from './Input/Input';
import Label from './Label/Label';
import Textarea from './Textarea/Textarea';
import Row from '../Row/Row';

export const required = value => value ? undefined : 'Required';

export const renderInput = ({ input, name, label, placeholder, type, meta }) => (
    <Fieldset>
        <Label show={ label }>{ label }</Label>
        <Input {...input} name={name} label={label} placeholder={placeholder} type={type} meta={ meta } />
        <FormErrorMessage meta={ meta } />
    </Fieldset>
);

export const renderTextarea = ({ input, label, type, meta}) => (
    <Fieldset>
        <Label>{ label }</Label>
        <Textarea className="form-control" {...input} placeholder={label} type={type} rows="6" meta={meta} />
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
                            component={ renderInput }
                            validate={[ required ]} />
                    </Col>
                    <Col width={ 1 }>&nbsp;</Col>
                    <Col width={ 5 }>
                        <Field
                            name={`${ingredient}.amount`}
                            type="text"
                            placeholder="Amount"
                            component={ renderInput }
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
