import { createSelector } from 'reselect';

// input selector: return a slice of state
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0)
);
