import React from 'react';
import styled from 'styled-components';

import Listing from 'components/Listing';
import colors from 'constants/colors.js';
import listings from 'mock/sample_cabinet_pages.json';

const Wrapper = styled.main`
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

const DarkOverlay = styled.div`
width: 100%;
position: absolute;
height: 100%;
background: #3338;
z-index: 0;
pointer-events: none;
`;

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

const Main = ({ darkOverlay }) => (
  <Wrapper>
    {darkOverlay && <DarkOverlay />}
    <SubNav />
    <Listing member={'Rex Tillerson'} data={listings['Rex_Tillerson']} />
  </Wrapper>
);

export default Main;
