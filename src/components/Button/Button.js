import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ButtonStyles, DangerStyles, PrimaryStyles} from './Button.styles';

const Button = (props) => {
    const { primary , danger, href, type } = props;


    if (href) {
        /*
         * react-router-dom Link component
         */
        const ButtonTemplate = styled(Link)`${ButtonStyles}`;

        return (
            <ButtonTemplate
                to={ href }
                data-primary={ primary || false }
                data-danger={ danger || false }
            >
                { Children.toArray(props.children) }
            </ButtonTemplate>
        );
    }


    if (type) {
        /*
         * HTML Button tag
         */
        const ButtonTemplate = styled.button`${ButtonStyles}`;

        return (
            <ButtonTemplate
                type={ type }
                onClick={ props.onClick }
                data-primary={ primary || false }
                data-danger={ danger || false }
            >
                { Children.toArray(props.children) }
            </ButtonTemplate>
        )
    }
};

Button.proptypes = {
    href: PropTypes.string,
    type: PropTypes.string,
    primary: PropTypes.bool,
    danger: PropTypes.bool,
}

export default Button;



