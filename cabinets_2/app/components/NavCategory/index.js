/**
*
* NavCategory
*
*/

import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.nav`
ul {
  width: 100%; height: 33px;
  display: flex;
  flex-direction: row;
  min-width: 1450px;
  padding: 0;
  border-bottom: 1px solid #e7e7e7;
  background: #FAFAFA;
  font-size: 12px;

  li {
    height: 31px;
    line-height: 33px;
    padding: 0 11px;
    border-bottom: 2px solid #f900; // probably lacking browser support
    
    p {
      margin: 0;
    }
  }

  li:hover {
    border-bottom: 2px solid #f90;
  }
}
`;

function NavCategory() {
  return (
    <Wrapper>
      <ul>
        <li className="orange-hover selected"><p>Home & Kitchen</p></li>
        <li className="orange-hover"><p>Best Sellers</p></li>
        <li className="orange-hover"><p>Shop by Room</p></li>
        <li className="orange-hover"><p>Bedding & Bath</p></li>
        <li className="orange-hover"><p>Home Décor</p></li>
        <li className="orange-hover"><p>Artwork</p></li>
        <li className="orange-hover"><p>Storage</p></li>
        <li className="orange-hover"><p>Vacuums & Floor Care</p></li>
        <li className="orange-hover"><p>Heating & Cooling</p></li>
        <li className="orange-hover"><p>Furniture</p></li>
        <li className="orange-hover"><p>Kitchen & Dining</p></li>
        <li className="orange-hover"><p>Patio & Garden</p></li>
        <li className="orange-hover"><p>Appliances</p></li>
        <li className="orange-hover"><p>Wedding Registry</p></li>
      </ul>
    </Wrapper>
  );
}

NavCategory.propTypes = {

};

export default NavCategory;
