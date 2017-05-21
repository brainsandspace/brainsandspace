import { createSelector } from 'reselect';

/**
 * Direct selector to the body state domain
 */
const selectBodyDomain = () => (state) => state.get('body');
// const selectBodyDomain = () => (state) => state.get('body');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Body
 */

export const makeSelectBodyDark = () => createSelector(
  selectBodyDomain(),
  (bodyState) => bodyState.dark
);

export const makeSelectBodySelectedListing = () => createSelector(
  selectBodyDomain(),
  (bodyState) => bodyState.selectedListing
);

// export default makeSelectBody;
// export {
//   selectBodyDomain,
// };
