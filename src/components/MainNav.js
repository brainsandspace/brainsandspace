import React from 'react';

import NavDropdown from 'components/NavDropdown';
import NavButton from 'components/NavButton';

import { DEPARTMENTS } from 'constants/index.js';

const NavTools = () => (
  <div id="nav-tools">
    <span>language</span> <span>account & lists</span> <span>orders</span>
  </div>
);



const MainNav = () => (
  <nav id="main-nav">
    <NavDropdown label="Departments">
      {DEPARTMENTS.map(dep => (
        <li className="orange-hover bold-hover" key={dep.name}>{dep.name}</li>
      ))}
    </NavDropdown>
    <NavButton label="Orders" />
    <NavTools />
  </nav>
);

export default MainNav;
