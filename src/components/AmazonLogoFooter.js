/**
*
* AmazonLogoFooter
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #232F3E;
  width: 100%;
  text-align: center;
  color: #ddd;
  align-items: center;
  padding: 15px;
  border-top: 1px solid #3a4553;

  #logo {
    background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized._CB281044790_.png);
    background-position: -10px -90px;
    width: 76px;
    height: 23px;
    margin-bottom: 10px;
  }

  p {
    font-size:12px;
  }
`;

function AmazonLogoFooter() {
  return (
    <Wrapper>
      <div id="logo" />
      <p>America</p>
    </Wrapper>
  );
}

AmazonLogoFooter.propTypes = {

};

export default AmazonLogoFooter;
