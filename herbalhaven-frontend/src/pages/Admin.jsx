import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import api from '../api/api';
import './Admin.css'; // Assuming you will create a CSS file for admin styles

const Admin = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

    useEffect(() => {
        if (user && user.isAdmin) {
            fetchProducts();
        }
    }, [user]);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await api.post('/products', newProduct);
            fetchProducts();
            setNewProduct({ name: '', price: '', image: '' });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await api.delete(`/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    if (!user || !user.isAdmin) {
        return <div>You do not have permission to access this page.</div>;
    }

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price (KES)"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - KES {product.price}
                        <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;