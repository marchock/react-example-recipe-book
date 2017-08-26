import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: block;
    width: 100%;
    height: 34px;
    padding: 20px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: ${ props => {
        const { touched, error, warning } = props.meta;
        
        if (!touched || (error || warning) === undefined) {
            return '1px solid #ccc;';
        } else {
            return '1px solid #d43f3a;';
        }
    }}
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
`;

export default Input;








