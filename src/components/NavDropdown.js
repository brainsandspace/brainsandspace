/**
*
* NavDropdown
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, withReducer } from 'recompose';

import { DEPARTMENTS } from 'constants/index.js';
import NavButton from 'components/NavButton';
import colors from 'constants/colors';

const enhance = compose(
  withReducer(
    'toggledOn',
    'dispatch',
    (state, action) => {
      switch (action.type) {
        case 'SHOW':
          return true;
        case 'HIDE':
          return false;
        case 'TOGGLE':
          return !state;
        default:
          return state;
      }
    },
    false
  ),
  withHandlers({
    showLocal: ({ dispatch }) => e => dispatch({ type: 'SHOW' }),
    hideLocal: ({ dispatch }) => e => dispatch({ type: 'HIDE' }),
    toggleLocal: ({ dispatch }) => e => dispatch({ type: 'TOGGLE' }),
  }),
  connect(
    state => ({ navDropdownVisible: state.navDropdownVisible }),
    dispatch => ({
      show: e => {
        dispatch({ type: 'SHOW_DROPDOWN' });
      },
      hide: e => {
        dispatch({ type: 'HIDE_DROPDOWN' });
      },
      toggle: e => {
        dispatch({ type: 'TOGGLE_DROPDOWN' });
      },
    })
  )
);

const NavDropdown = enhance(
  ({
    label,
    toggledOn,
    show,
    showLocal,
    hide,
    hideLocal,
    toggle,
    toggleLocal,
    children
  }) => (
    <NavButton
      onClick={() => {
        console.log('clicked')
        toggleLocal();
        toggle();
      }}
      onMouseEnter={() => {
        showLocal();
        show();
      }}
      onMouseLeave={() => {
        hideLocal();
        hide();
      }}
      label={label}
    >
      <div id="nav-arrow" />
      {toggledOn && <Dropdown children={children} />}
    </NavButton>
  )
);

const UL = styled.ul`
position: fixed;
background: white;
min-width: 230px;
padding: 10px;
margin: 0;
margin-left: -1.3rem;
border-radius: 2px;
list-style: none;
color: #444;

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

li {
  &:hover {
    font-weight: bold;
    color: ${colors.orangeText}
  }
}
`;

const Dropdown = (props) => (
  <UL>
    {props.children}
  </UL>
);

export default NavDropdown;
