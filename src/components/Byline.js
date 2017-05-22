import React, { PropTypes } from 'react';
import styled from 'styled-components';

const months = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
};
const Wrapper = styled.p`
margin-bottom: 5px;
`;

function Byline({ author, timestamp }) {
  return (
    <Wrapper>
      By <a href={`https://twitter.com/${author}`} target="_blank">{author}</a> on {formatTime(timestamp)}
    </Wrapper>
  );
}

Byline.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

function formatTime(ts) {
  console.log(months);
  console.log(`${ts.match(/\s(\w+\s\d+\b)/)[1]}`);
  console.log(`${months[ts.match(/\s(\w+\b)/)[1]]}`);
  return `${months[ts.match(/\s(\w+\b)/)[1]]} ${ts.match(/\d+\b/)}, ${ts.match(/\d+$/)}`;
}



export default Byline;
