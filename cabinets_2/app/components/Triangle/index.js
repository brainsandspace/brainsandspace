/**
*
* Triangle
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
border-style: solid;
_border-style: dashed;
border-width: 9px;
border-color: transparent;
border-top-width: 0;
border-bottom: 9px solid #fff;
width: 0;
height: 0;
font-size: 0;
line-height: 0;
position: absolute;
top: 1px;
left: -9px;
`;


function Triangle() {
  return (
    <Wrapper>
    </Wrapper>
  );
}

Triangle.propTypes = {

};

export default Triangle;
