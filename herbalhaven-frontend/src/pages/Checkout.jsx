import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';
import { createOrder } from '../api/api'; // Function to create an order
import './Checkout.css'; // Import any specific styles for this component

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [paymentMethod, setPaymentMethod] = useState('mpesa'); // Default payment method
    const history = useHistory();

    const handlePayment = async () => {
        if (!user) {
            alert('Please log in to proceed with the payment.');
            return;
        }

        // Create order logic here
        const orderData = {
            items: cartItems,
            userId: user.uid,
            paymentMethod,
        };

        try {
            const response = await createOrder(orderData);
            if (response.success) {
                clearCart(); // Clear cart after successful order
                history.push('/'); // Redirect to home or order confirmation page
            } else {
                alert('Failed to create order. Please try again.');
            }
        } catch (error) {
            console.error('Error creating order:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="payment-methods">
                <h3>Select Payment Method</h3>
                <label>
                    <input
                        type="radio"
                        value="mpesa"
                        checked={paymentMethod === 'mpesa'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    M-Pesa
                </label>
                <label>
                    <input
                        type="radio"
                        value="stripe"
                        checked={paymentMethod === 'stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit/Debit Card
                </label>
            </div>
            <button onClick={handlePayment}>Proceed to Payment</button>
        </div>
    );
};

export default Checkout;