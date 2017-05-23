import React from 'react';
import styled from 'styled-components';

import colors from 'constants/colors.js';
import MainNav from 'components/MainNav';
import NavBelt from 'components/NavBelt';

const Wrapper = styled.header`
background: ${colors.darkblue}
line-height: 1.5rem;
z-index: 20;
overflow-x: hidden;

nav#main-nav {
  display: flex;
  color: white;
  z-index: 20;
  padding: 0.25rem 0;

  #nav-tools {
    z-index: 20;
    color: #ccc;
  }
}

nav#sub-nav {
  ul {
    height: 33px;
    line-height: 33px;
    display: flex;
    flex-direction: row;
    list-style: none;
    min-width: 1450px;
    background: #fafafa;
    border-bottom: 1px solid #e7e7e7;
    font-size: 12px;

    li {
      height: 31px;
      line-height: 33px;
      padding: 0 11px;

      a {
        color: #333;
      }
    }

    li:hover {
      border-bottom: 2px solid ${colors.orange};

      a {
        color: ${colors.orangeText}
      }
    }
  }

  .selected {
    font-weight: bold;
  }
}
`;

const Header = () => (
  <Wrapper>
    <NavBelt />
    <MainNav />
  </Wrapper>
);

export default Header;
