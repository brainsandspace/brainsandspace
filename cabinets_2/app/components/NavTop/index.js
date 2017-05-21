/**
*
* NavTop
*
*/

import React from 'react';
import styled from 'styled-components';

import NavTools from 'components/NavTools';
import DepartmentList from 'containers/DepartmentList';

const Wrapper = styled.nav`
background: #232F3E;
width: 100%;
display: flex;
flex-direction: row;
`;

class NavTop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <DepartmentList />
        <NavTools />
      </Wrapper>
    );
  }
}

NavTop.propTypes = {

};

export default NavTop;
