import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.ul`
position: fixed;
background: white;
min-width: 230px;
padding: 10px;
margin: 0;
margin-top: -4px;
border-radius: 2px;

&:before {
  content:'';
  border-style: solid;
  border-width: 9px;
  border-color: transparent;
  border-top-width: 0;
  border-bottom: 9px solid #fff;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 1px;
  left: 45%;
  margin-top:-10px;  
}
`;

export default function StyledList({ departmentsArr }) {
  return (
    <Wrapper>
      {
        departmentsArr.map((dep) => {
          return (
            <li className="orange-hover bold-hover" key={dep.name}>{dep.name}</li>
          );
        })
      }
    </Wrapper>
  );
}
