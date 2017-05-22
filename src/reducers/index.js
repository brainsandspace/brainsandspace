import { combineReducers } from 'redux';

const navDropdownVisible = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_DROPDOWN':
      return true;
    case 'HIDE_DROPDOWN':
      return false;
    case 'TOGGLE_DROPDOWN':
      return !state;
    default:
      return state;
  }
};

const indexHighlighted = (state = 0, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_IMAGE':
      return action.index;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  navDropdownVisible,
  indexHighlighted,
});

export default rootReducer;
