import React from 'react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/currencyConverter';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{formatCurrency(product.priceKES)} / {formatCurrency(product.priceUSD)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;