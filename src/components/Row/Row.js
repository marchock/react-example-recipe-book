import React from 'react';
import styled from 'styled-components';

const PADDING = '0 15px';
const MARGIN = '15px 0';

const Row = styled.div`
    padding: ${ props => props.padding ? PADDING : 0 };
    margin: ${ props => props.margin ? MARGIN : 0 };
    width: 100%;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
`;

export default Row;
