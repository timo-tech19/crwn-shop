export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check if item to add already exists in cart list
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    // If so return a new array with that same elements but the found element's quantity modified
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            // Update quantity only for item to be added otherwise do nothing
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
    }

    // if element does not exist, create one and set its quantity to 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) return [...cartItems];

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : { ...cartItem }
    );
};
