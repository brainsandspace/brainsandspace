/*
 *
 * DepartmentList reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import {
  SHOW_DEPARTMENT_LIST,
  HIDE_DEPARTMENT_LIST,
  DEPARTMENTS,
} from './constants';

const initialState = {
  departmentListVisible: false,
  departmentsArr: DEPARTMENTS,
};
console.log('initialState', initialState);

function departmentListVisibleReducer(state = initialState.departmentListVisible, action) {
  switch (action.type) {

    case SHOW_DEPARTMENT_LIST:
      return true;

    case HIDE_DEPARTMENT_LIST:
      return false;

    default:
      return state;
  }
}

function departmentsArrReducer(state = initialState.departmentsArr, action) {
  console.log('action astate', action, state);
  switch (action.type) {
    case SHOW_DEPARTMENT_LIST:
      return state;
    default:
      console.log('returned state', state)
      return state;
  }
}

const departmentListReducer = combineReducers({
  departmentListVisible: departmentListVisibleReducer,
  departmentsArr: departmentsArrReducer,
});
export default departmentListReducer;
