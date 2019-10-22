import { contentConstants } from '../_constants';

export function content(state = {}, action) {
  switch (action.type) {
    case contentConstants.INITIAL:
      return {
        type: 'success',
      };
    default:
      return state
  }
}