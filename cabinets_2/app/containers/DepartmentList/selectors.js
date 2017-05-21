import { createSelector } from 'reselect';

/**
 * Direct selector to the departmentList state domain
 */
const selectDepartmentListDomain = (state) => state.get('departments');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DepartmentList
 */

const makeSelectDepartmentList = () => createSelector(
  selectDepartmentListDomain,
  // (substate) => substate.toJS()
);
console.log('makeselectdepartmentList', makeSelectDepartmentList());

export {
  selectDepartmentListDomain,
  makeSelectDepartmentList,
};
