/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import NavFooter from 'components/NavFooter';
import AmazonLogoFooter from 'components/AmazonLogoFooter';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  position: relative;
`;

const BackToTop = styled.div`
  width: 100%;
  background: #37475A;
  padding: 15px;
  color: white;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #485769;
  }
`;

class Footer extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <BackToTop
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p>Back to top</p>
        </BackToTop>
        <NavFooter />
        <AmazonLogoFooter />
        {/* there could be more here but I don't think we have to replicate Amazon 100% */}
      </Wrapper>
    );
  }
}

Footer.propTypes = {};

export default Footer;
