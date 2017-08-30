import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
    width: 100%;
    
    @media (min-width: 1024px) {
        float: left;
        ${props => props.width === 12 ? 'width: 100%;' : ''}
        ${props => props.width === 9 ? 'width: 75%;' : ''}
        ${props => props.width === 7 ? 'width: 58.33333333%;' : ''}
        ${props => props.width === 5 ? 'width: 41.66666667%;' : ''}
        ${props => props.width === 3 ? 'width: 25%;' : ''}
        ${props => props.width === 2 ? 'width: 16.66666667%;' : ''}
        ${props => props.width === 1 ? 'width: 8.33333333%;' : ''}
	}
`;

export default Col;
