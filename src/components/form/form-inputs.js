import React from 'react';

export const renderInput = ({ input, name, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
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
