/**
*
* AltImages
*
*/

import React, { PropTypes } from 'react';
import stringHash from 'string-hash';

import styled from 'styled-components';

import Thumbnail from 'components/Thumbnail';

const Wrapper = styled.ul`
padding: 0;
`;

function AltImages({ textures, indexHighlighted, onMouseEnter }) {
  return (
    <Wrapper>
      {textures.map((tex, ind) => (
        <Thumbnail
          key={stringHash(tex.src)}
          ind={ind}
          texture={tex}
          highlighted={ind === indexHighlighted}
          onMouseEnter={onMouseEnter}
        />
      ))}
    </Wrapper>
  );
}

AltImages.propTypes = {
  textures: PropTypes.arrayOf(
    React.PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })).isRequired,
  indexHighlighted: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,

};

export default AltImages;
