import React from 'react';
import styled from 'styled-components';

import SearchBar from 'components/SearchBar';

const Wrapper = styled.div`
margin-bottom: 10px;
display: flex;
z-index: 20;

#nav-logo {
  padding: 13px 18px 0 27px;
}
.nav-sprite {
  background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized._CB281044790_.png);
}

.nav-logo-base {
  background-position: -10px -51px;
  width: 97px;
  height: 29px;
}

.empty-space {
  min-width: 250px;
}
`;

const NavBelt = () => (
  <Wrapper>
    <div id="nav-logo">
      <div className="nav-sprite nav-logo-base" />
      <span className="nav-sprite nav-logo-tagline" />
    </div>
    <SearchBar />
    <div className="empty-space"></div>
  </Wrapper>
);

export default NavBelt;
