/*
 *
 * Body reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

import {
  SHOW_DEPARTMENT_LIST,
  HIDE_DEPARTMENT_LIST,
} from 'containers/DepartmentList/constants';

import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  dark: false,
  selectedListing: { member: 'Rex_Tillerson', department: 'state' },
});

function darkReducer(state = initialState.get('dark'), action) {
  switch (action.type) {
    case SHOW_DEPARTMENT_LIST:
      return true;
    case HIDE_DEPARTMENT_LIST:
      return false;
    default:
      return state;
  }
}

function listingReducer(state = initialState.get('selectedListing'), action) {
  switch (action.type) {
    default:
      return state;
  }
}

const bodyReducer = fromJS(combineReducers({
  listing: listingReducer,
  dark: darkReducer,
}));

export default bodyReducer;
