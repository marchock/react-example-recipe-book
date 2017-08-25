import React from 'react';
import Fieldset from '../../../components/Form/Fieldset/Fieldset';
import Textarea from '../../../components/Form/Textarea/Textarea';
import FormErrorMessage from '../../../components/Form/ErrorMessage/ErrorMessage';
import Label from '../../../components/Form/Label/Label';

const textarea = ({ input, label, type, meta}) => (
    <Fieldset>
        <Label>{ label }</Label>
        <Textarea
            className="form-control"
            {...input}
            placeholder={label}
            type={type}
            rows="6"
            meta={meta}
        />
        <FormErrorMessage meta={ meta } />
    </Fieldset>
);

export default textarea;
