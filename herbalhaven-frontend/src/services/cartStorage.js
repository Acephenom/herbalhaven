const CART_KEY = 'herbalhaven_cart';

// Function to get cart data from localStorage
export const getCart = () => {
    const cartData = localStorage.getItem(CART_KEY);
    return cartData ? JSON.parse(cartData) : [];
};

// Function to save cart data to localStorage
export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Function to clear cart data from localStorage
export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
};