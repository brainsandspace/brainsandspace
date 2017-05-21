/**
*
* Thumbnail
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  // background
  width: 40px; height: 40px;
  list-style: none;
  padding: 0;
  margin: 10px;
  border-radius: 2px;
  border: solid 1px #a2a6ac;
  cursor: pointer;
`;

function Thumbnail({ ind, onMouseEnter, texture, highlighted }) {
  return highlighted ?
    <Wrapper
      style={{
        backgroundImage: `url(${texture.src})`,
        borderColor: '#e77600',
        boxShadow: '0 0 3px 2px rgba(228,121,17,.5)',
      }}
    >
    </Wrapper> :
    <Wrapper
      onMouseEnter={() => { onMouseEnter(ind); }}
      className="highlight"
      style={{
        backgroundImage: `url(${texture.src})`,
      }}
    >
    </Wrapper>;
}


Thumbnail.propTypes = {
  texture: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  highlighted: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  ind: PropTypes.number.isRequired,
};

export default Thumbnail;
