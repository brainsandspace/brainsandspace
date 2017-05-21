/**
*
* DarkOverlay
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
top:0;
position: fixed;
height: 100%;
background: #3338;
z-index: 0;

`;


function DarkOverlay() {
  return (
    <Wrapper>
      asdfasdf
    </Wrapper>
  );
}

DarkOverlay.propTypes = {

};

export default DarkOverlay;
