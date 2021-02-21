import React from 'react';
import '../styles/ProductList.css';
import Product from './Product';
import listOfProducts from '../list-of-products.js';

const ProductList = () => {

    const products = listOfProducts.map((product) => {
        return <Product key={product.sku} product={product}/>;
    });

    return (
        <div className='product-list'>
            { products }
        </div>
    );
}

export default ProductList;