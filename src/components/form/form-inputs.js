import React from 'react';
import { Field } from 'redux-form';
import Button from '../button/button';

export const required = value => value ? undefined : 'Required';

export const renderInput = ({ input, col, name, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group ${col} ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} name={name} placeholder={label} type={type}/>
            <div className="text-help">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
);

export const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <div>
            <textarea className="form-control" {...input} placeholder={label} type={type} rows="6" />
            <div className="text-help">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
);



export const renderIngredients = ({ fields, meta: { error, submitFailed } }) => {

    const addNewIngredient = () => {
        fields.push({})
    };

    return (
        <div>
            {fields.map((ingredient, index) =>
                <div className="form-group row" key={index}>
                    <div className="col-md-5">
                        <Field
                            name={`${ingredient}.name`}
                            type="text"
                            label="Ingredient name"
                            component={ renderInput }
                            validate={[ required ]} />
                    </div>
                    <div className="col-md-5">
                        <Field
                            name={`${ingredient}.amount`}
                            type="text"
                            label="Amount"
                            component={ renderInput }
                            validate={[ required ]} />
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <Button type="submit" danger onClick={() => fields.remove(index)}>-</Button>
                        </div>
                    </div>
                </div>
            )}

            <Button type="button" onClick={ addNewIngredient }>Add new ingredient</Button>
            {submitFailed &&
            error &&
            <span>
             {error}
            </span>}
        </div>
    )
}

