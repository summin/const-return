import { navConstants } from '../_constants';

export function nav(state = {}, action) {
  switch (action.type) {
    case navConstants.INITIAL:
      return {
        type: 'success',
      };
    default:
      return state
  }
}