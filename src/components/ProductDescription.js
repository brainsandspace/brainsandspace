/**
*
* ProductDescription
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 0 18px;

h2 {
  color: #CC6600;
  font-size: medium;
  font-weight: 700;
  margin-bottom: 5px;
}

p {
  padding-left: 30px;
}

hr {
  border-top: #e7e7e7;
}

`;


function ProductDescription({ text }) {
  return (
    <Wrapper>
      <h2>Product Description</h2>
      <p>{text}</p>
      <hr />
    </Wrapper>
  );
}

ProductDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProductDescription;
