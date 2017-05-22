import React from 'react';
import styled from 'styled-components';

import NavDropdown from 'components/NavDropdown';
import NavButton from 'components/NavButton';
import colors from 'constants/colors';
import { DEPARTMENTS } from 'constants/index.js';

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

const NavTools = () => (
  <div id="nav-tools">
    <span>language</span> <span>account & lists</span> <span>orders</span>
  </div>
);

const MainNav = () => (
  <nav id="main-nav">
    <NavDropdown label="Departments">
      {DEPARTMENTS.map(dep => {
        return (
          <li className="orange-hover bold-hover" key={dep.name}>{dep.name}</li>
        );
      })}
    </NavDropdown>
    <NavButton label="Orders" />
    <NavTools />
  </nav>
);

const SubNav = () => (
  <nav id="sub-nav">
    <ul>
      <li className="selected"><a href="#">Home & Kitchen</a></li>
      <li><a href="#">Best Sellers</a></li>
      <li><a href="#">Shop by Room</a></li>
      <li><a href="#">Bedding & Bath</a></li>
      <li><a href="#">Home Décor</a></li>
      <li><a href="#">Artwork</a></li>
      <li><a href="#">Storage</a></li>
      <li><a href="#">Vacuums & Floor Care</a></li>
      <li><a href="#">Heating & Cooling</a></li>
      <li><a href="#">Furniture</a></li>
      <li><a href="#">Kitchen & Dining</a></li>
      <li><a href="#">Patio & Garden</a></li>
      <li><a href="#">Appliances</a></li>
      <li><a href="#">Wedding Registry</a></li>
    </ul>
  </nav>
);

const Header = () => (
  <Wrapper>
    <MainNav />
    <SubNav />
  </Wrapper>
);

export default Header;
