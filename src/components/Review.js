/**
*
* Review
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Byline from './Byline';

const Wrapper = styled.li`
margin-bottom: 20px;

.title {
  line-height: 18px;
  font-weight: bold;
}

.stars {
    background-position: -69px -368px;
    margin-right: 5px;
}
`;


function Review({ author, text, timestamp }) {
  return (
    <Wrapper>
      <p className="title"><span className="stars"><span style={{opacity: 0}}>0.0 out of 5 stars</span></span>What should the title be!?</p>
      <Byline author={author} timestamp={timestamp} />
      <p>{text}</p>
    </Wrapper>
  );
}

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Review;
