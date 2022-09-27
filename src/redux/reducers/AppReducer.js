
import * as types from '../actions/types';

const initialState = {
    loader: true,
    isLoggedIn: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_APP:
            return { ...state, loader: false };
        default:
            return state;
    }
};

export default reducer;