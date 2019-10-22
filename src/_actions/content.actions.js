import { contentConstants } from '../_constants';

export const contentActions = {
    initial
};

function initial() {
    return { type: contentConstants.INITIAL };
}