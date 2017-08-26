import React from 'react';
import Row from '../../../components/Row/Row';
import Col from '../../../components/Col/Col';
import { Field } from 'redux-form';
import Button from '../../../components/Button/Button';
import Fieldset from '../../../components/Form/Fieldset/Fieldset';
import { inputText } from './inputText';
import { required } from './formFunctions';

export const ingredientsArray = ({ fields, meta: { error, submitFailed } }) => {
    const addNewIngredient = () => {
        fields.push({})
    };

    return (

        <Row>
            {fields.map((ingredients, index) =>
                <Row key={index}>
                    <Col width={ 5 }>
                        <Field
                            name={`${ingredients}.ingredient`}
                            type="text"
                            placeholder="Ingredient name"
                            component={ inputText }
                            validate={[ required ]} />
                    </Col>
                    <Col width={ 1 }>&nbsp;</Col>
                    <Col width={ 5 }>
                        <Field
                            name={`${ingredients}.amount`}
                            type="text"
                            placeholder="Amount"
                            component={ inputText }
                            validate={[ required ]} />
                    </Col>

                    <Col width={ 1 }>
                        <Fieldset>
                            <Button
                                type="submit"
                                onClick={() => fields.remove(index)}
                                danger
                                right
                            >-</Button>
                        </Fieldset>
                    </Col>
                </Row>
            )}

            <Row className="flex-end">
                <Button
                    type="button"
                    onClick={ addNewIngredient }
                >
                    Add new ingredient
                </Button>
            </Row>
        </Row>
    );
};
