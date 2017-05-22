/**
*
* HeroSection
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGallery from 'components/ImageGallery';
import CenterColumn from 'components/CenterColumn';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

class HeroSection extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <Wrapper>
        <ImageGallery data={this.props.data} />
        <CenterColumn {...this.props} />
      </Wrapper>
    );
  }
}

HeroSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeroSection;
