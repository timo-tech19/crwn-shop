import cartActionTypes from './cartActionTypes';

const cartReducer = (state = { hidden: true }, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        default:
            return state;
    }
};

export default cartReducer;
