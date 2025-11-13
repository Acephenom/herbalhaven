import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/products">Shop Now</Link></p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>Price: KES {item.price} / USD {item.price / 110}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: KES {totalAmount} / USD {totalAmount / 110}</h2>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to="/checkout">
                        <button>Proceed to Checkout</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;