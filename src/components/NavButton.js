import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

padding: 0 10px;
border: 1px solid #4440;
cursor: pointer;
z-index: 20;
margin-left: 10px;

&:hover {
  border: 1px solid #444;
}

h2 {
  color: white;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  margin: 0.5rem 0;
}
`;

const NavButton = ({ label, children, ...props }) => (
  <Wrapper {...props}>
    <h2>{label}</h2>
    {children}
  </Wrapper>
);

export default NavButton;
