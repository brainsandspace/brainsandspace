/**
*
* ImageGallery
*
*/

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import styled from 'styled-components';

import HeroImage from 'components/HeroImage';
import AltImages from 'components/AltImages';

import rex from 'mock/Rex.jpg';

const Wrapper = styled.div`
display: flex;
align-items: center;
`;

class ImageGallery extends React.Component {

  render() {
    return (
      <Wrapper>
        <AltImages
          textures={this.props.data.alt_images}
          indexHighlighted={this.props.indexHighlighted}
          onMouseEnter={this.props.onMouseEnter}
        />
        <HeroImage cabinet_texture={this.props.data.alt_images[this.props.indexHighlighted]} member_texture={rex} />
      </Wrapper>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.object.isRequired,
  indexHighlighted: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    indexHighlighted: state.indexHighlighted
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onMouseEnter: (ind) => dispatch({type: 'HIGHLIGHT_IMAGE', index: ind}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
