
import { fromJS } from 'immutable';
import departmentListReducer from '../reducer';

describe('departmentListReducer', () => {
  it('returns the initial state', () => {
    expect(departmentListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
