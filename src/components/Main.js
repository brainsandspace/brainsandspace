import React from 'react';
import styled from 'styled-components';

import Listing from 'components/Listing';

import listings from 'mock/sample_cabinet_pages.json';

const DarkOverlay = styled.div`
width: 100%;
top:0;
position: fixed;
height: 100%;
background: #3338;
z-index: 0;
pointer-events: none;
`;

const Main = ({ darkOverlay }) => (
  <main>
    {darkOverlay && <DarkOverlay />}
    <Listing member={'Rex Tillerson'} data={listings['Rex_Tillerson']} />
  </main>
);

export default Main;
