/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import BackToTop from 'components/BackToTop';
import NavFooter from 'components/NavFooter';
import AmazonLogoFooter from 'components/AmazonLogoFooter';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  position: relative;
`;

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <BackToTop onClick={() => { window.scrollTo(0, 0); }} />
        <NavFooter />
        <AmazonLogoFooter />
        {/* there could be more here but I don't think we have to replicate Amazon 100% */}
      </Wrapper>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
