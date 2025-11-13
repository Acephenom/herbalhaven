import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Products.css'; // Assuming you will create a CSS file for this component

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filters, setFilters] = useState({
        strainType: '',
        priceRange: [0, 10000], // Example price range
        search: ''
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const filteredProducts = products.filter(product => {
        const matchesStrainType = filters.strainType ? product.strainType === filters.strainType : true;
        const matchesPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
        const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
        return matchesStrainType && matchesPriceRange && matchesSearch;
    });

    return (
        <div className="products-page">
            <h1>Products</h1>
            <div className="filters">
                <select name="strainType" onChange={handleFilterChange}>
                    <option value="">All Strain Types</option>
                    <option value="Indica">Indica</option>
                    <option value="Sativa">Sativa</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    onChange={(e) => handleFilterChange({ target: { name: 'priceRange', value: [e.target.value, filters.priceRange[1]] } })}
                />
                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max Price"
                    onChange={(e) => handleFilterChange({ target: { name: 'priceRange', value: [filters.priceRange[0], e.target.value] } })}
                />
                <input
                    type="text"
                    name="search"
                    placeholder="Search Products"
                    onChange={handleFilterChange}
                />
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="product-list">
                    {filteredProducts.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;