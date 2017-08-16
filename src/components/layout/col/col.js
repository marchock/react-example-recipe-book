import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
    float: left;
    width: 100%;
    
    @media (min-width: 1024px) {
        ${props => props.width === 12 ? 'width: 100%;' : ''}
        ${props => props.width === 7 ? 'width: 58.33333333%;' : ''}
        ${props => props.width === 5 ? 'width: 41.66666667%;' : ''}
	}
`;

export default Col;
