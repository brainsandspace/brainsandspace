/**
*
* NavFooter
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #232F3E;
  color: #ddd;

  ul {
    list-style: none;
    padding: 0;
  }
`;

function NavFooter() {
  return (
    <Wrapper>
      <ul>
        <li>
          dummy
        </li>
        <li>
          dummy
        </li>
        <li>
          dummy
        </li>
      </ul>
    </Wrapper>
  );
}

NavFooter.propTypes = {

};

export default NavFooter;
