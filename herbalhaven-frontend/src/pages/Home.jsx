import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/main.css';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setFeaturedProducts(response.data);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="home">
            <header className="hero-banner">
                <h1>Welcome to Herbal Haven</h1>
                <p>Your trusted source for quality cannabis products.</p>
                <Link to="/products" className="shop-now-button">Shop Now</Link>
            </header>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {featuredProducts.map(product => (
                        <div key={product._id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Price: KES {product.price} / USD {product.priceUSD}</p>
                            <Link to={`/products/${product._id}`} className="view-product-button">View Product</Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;