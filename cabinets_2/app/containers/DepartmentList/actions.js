/*
 *
 * DepartmentList actions
 *
 */

import {
  SHOW_DEPARTMENT_LIST,
  HIDE_DEPARTMENT_LIST,
} from './constants';

export function showDepartmentList() {
  return {
    type: SHOW_DEPARTMENT_LIST,
  };
}

export function hideDepartmentList() {
  return {
    type: HIDE_DEPARTMENT_LIST,
  };
}
