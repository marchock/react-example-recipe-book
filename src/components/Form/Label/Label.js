import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 14px;
    line-height: 1.2;
    color: #555;
    display: ${props => props.show ? 'block' : 'none' };
`;

export default Label;
