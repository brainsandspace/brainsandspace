/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import NavTop from 'components/NavTop';

const Wrapper = styled.header`
display: flex;
flex-direction: column;
width:100%;
overflow: hidden;
z-index: 60;
position: relative;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <div className="header">
          <NavTop />
          <div className="top"></div>
        </div>
      </Wrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
