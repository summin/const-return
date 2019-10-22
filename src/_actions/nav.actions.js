import { navConstants } from '../_constants';

export const navActions = {
    initial
};

function initial() {
    return { type: navConstants.INITIAL };
}