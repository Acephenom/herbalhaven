import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

// Create a new product (Admin only)
export const createProduct = async (productData, token) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

// Update a product (Admin only)
export const updateProduct = async (id, productData, token) => {
    try {
        const response = await axios.put(`${API_URL}/products/${id}`, productData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Delete a product (Admin only)
export const deleteProduct = async (id, token) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

// Create a new order
export const createOrder = async (orderData, token) => {
    try {
        const response = await axios.post(`${API_URL}/orders`, orderData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

// Fetch order by ID
export const fetchOrderById = async (id, token) => {
    try {
        const response = await axios.get(`${API_URL}/orders/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
};

// Placeholder for M-Pesa payment integration
export const initiateMpesaPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/payments/mpesa`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error initiating M-Pesa payment:', error);
        throw error;
    }
};

// Placeholder for Stripe payment integration
export const initiateStripePayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/payments/stripe`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error initiating Stripe payment:', error);
        throw error;
    }
};