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

        if (primary) {
            const Button = ButtonTemplate.extend`${PrimaryStyles}`;

            return (
                <Button to={ href }>
                    { Children.toArray(props.children) }
                </Button>
            )
        }

        if (danger) {
            const Button = ButtonTemplate.extend`${DangerStyles}`;

            return (
                <Button to={ href }>
                    { Children.toArray(props.children) }
                </Button>
            )
        }

        return (
            <ButtonTemplate to={ href }>
                { Children.toArray(props.children) }
            </ButtonTemplate>
        )
    }


    if (type) {
        /*
         * HTML Button tag
         */
        const ButtonTemplate = styled.button`${ButtonStyles}`;

        if (primary) {
            const Button = ButtonTemplate.extend`${PrimaryStyles}`;

            return (
                <Button e type={ type } onClick={ props.onClick }>
                    { Children.toArray(props.children) }
                </Button>
            )
        }

        if (danger) {
            const Button = ButtonTemplate.extend`${DangerStyles}`;

            return (
                <Button e type={ type } onClick={ props.onClick }>
                    { Children.toArray(props.children) }
                </Button>
            )
        }

        return (
            <ButtonTemplate type={ type } onClick={ props.onClick }>
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



