import { HIGHLIGHT_IMAGE } from './constants';

export function highlightImage(index) {
  return {
    type: HIGHLIGHT_IMAGE,
    index,
  };
}