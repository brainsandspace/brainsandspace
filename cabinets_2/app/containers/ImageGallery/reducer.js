import { HIGHLIGHT_IMAGE } from './constants';

function imageGalleryReducer(state = 0, action) {
  switch (action.type) {
    case HIGHLIGHT_IMAGE:
      return action.index;

    default:
      return state;
  }
}

export default imageGalleryReducer;
