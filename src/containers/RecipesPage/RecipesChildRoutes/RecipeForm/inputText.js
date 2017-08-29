import React from 'react';
import FormErrorMessage from '../../../../components/Form/ErrorMessage/ErrorMessage';
import Fieldset from '../../../../components/Form/Fieldset/Fieldset';
import Input from '../../../../components/Form/Input/Input';
import Label from '../../../../components/Form/Label/Label';

export const inputText = ({ input, name, label, placeholder, type, meta }) => (
    <Fieldset>
        <Label show={ label }>{ label }</Label>
        <Input
            {...input}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            meta={ meta }
        />
        <FormErrorMessage meta={ meta } />
    </Fieldset>
);





