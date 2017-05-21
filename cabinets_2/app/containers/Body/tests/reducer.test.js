
import { fromJS } from 'immutable';
import bodyReducer from '../reducer';

describe('bodyReducer', () => {
  it('returns the initial state', () => {
    expect(bodyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
