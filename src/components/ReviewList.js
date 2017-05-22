/**
*
* ReviewList -- this is now a container so it can be loaded later only when user has scrolled down some or something
*
*/

import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import styled from 'styled-components';

import Review from 'components/Review';

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const sampleReviews = [
  {
    author: 'ladycabdriver',
    text: "Drumpf's Labor pick's companies have faced multiple class-action lawsuits https:\/\/t.co\/aBle4KcgbY",
    timestamp: 'Tue Jan 24 02:26:23 +0000 2017',
  },
  {
    author: 'Ambnt1',
    text: 'Andrew Puzder\u2019s 16-Year Record of Discrimination Lawsuits \u2013 Capital & Main https:\/\/t.co\/SBkI9I8I0k',
    timestamp: 'Tue Jan 24 02:17:26 +0000 2017',
  },
  {
    author: 'madrigal8098',
    text: '@jrisco @vampipe Este pendejo es lider de los trabajadores?. Este Pterodactilo va negociar con Willbur Ross, Andrew Puzder y Kushner? \ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02',
    timestamp: 'Tue Jan 24 01:38:30 +0000 2017',
  },
];

class ReviewList extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(sampleReviews);
    return (
      <Wrapper>
        {sampleReviews.map(review => (
          <Review
            key={shortid.generate()}
            author={review.author}
            text={review.text}
            timestamp={review.timestamp}
          />
        ))}
      </Wrapper>
    );
  }
}
ReviewList.propTypes = {};

const mapStateToProps = state => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
