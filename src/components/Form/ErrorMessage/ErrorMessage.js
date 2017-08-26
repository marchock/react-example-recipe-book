import React from 'react';
import styled from 'styled-components';
import ErrorMessageStyles from './ErrorMessage.styles';

const FormErrorMessage = ({ meta }) => {
    const { touched, error, warning } = meta;
    const P = styled.p`${ErrorMessageStyles}`;

    if (!touched || (error || warning) === undefined) {
        return (null);
    }

    return (
        <P>
            { error || warning }
        </P>
    );
};

export default FormErrorMessage;
