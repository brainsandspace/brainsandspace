/**
*
* Listing
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import ReviewList from 'containers/ReviewList';
import HeroSection from 'components/HeroSection';
import ProductDescription from 'components/ProductDescription';
import ProductDetails from 'components/ProductDetails';

const Wrapper = styled.div`
display:flex;
flex-direction: column;

.back-button {
  margin-left: 10px;

  .back-arrow {
    margin 5px;
    vertical-align: top;
    line-height: 18px;
  }

  .back {
    color: #767676;
    font-size: 12px;

    &:hover {
      color: #c45500;
    }
}
`;

class Listing extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // static props = {
  //   member
  // }

  render() {
    return (
      <Wrapper>
        <p className="back-button"><span className="back-arrow">‹&nbsp;</span><a href="#" className="back">Back to search results for "cabinet"</a></p>
        <HeroSection {...this.props} />
        <ProductDescription text={this.props.data.product_description} />
        <ProductDetails deets={this.props.data.product_details} />
        <ReviewList />
      </Wrapper>
    );
  }
}

Listing.propTypes = {
  member: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired, // TODO specify shape
};

export default Listing;
