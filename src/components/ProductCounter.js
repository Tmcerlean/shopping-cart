import React, { useState, useEffect } from 'react';
import '../styles/ProductCounter.css';
import listOfProducts from '../list-of-products.js';

const ProductCounter = () => {

    const [countProducts, setCountProducts] = useState(listOfProducts.length);

    useEffect(() => {
        setCountProducts(listOfProducts.length)
    }, [listOfProducts]);

    return (
        <div className="product-counter-block">
            <p className="product-counter">{countProducts} styles found</p>
        </div>
    );
}

export default ProductCounter;
