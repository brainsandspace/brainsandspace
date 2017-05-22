/**
*
* Listing
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReviewList from 'components/ReviewList';
import HeroSection from 'components/HeroSection';
import ProductDescription from 'components/ProductDescription';
import ProductDetails from 'components/ProductDetails';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

.back-button {
  margin-left: 10px;
  .back-arrow {
    margin 5px;
    vertical-align: top;
  }
}

.back {
  color: #767676;
  font-size: 12px;
  &:hover {
    color: #c45500;
    text-decoration: underline;
  }
}
`;

const Listing = (props) => (
  <Wrapper>
    <p className="back-button">
      <span className="back-arrow">‹&nbsp;</span>
      <a href="#" className="back">Back to search results for "cabinet"</a>
    </p>
    <HeroSection {...props} />
    <ProductDescription text={props.data.product_description} />
   <ProductDetails deets={props.data.product_details} />
     <ReviewList />
  </Wrapper>
);

Listing.propTypes = {
  member: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired, // TODO specify shape
};

export default Listing;
