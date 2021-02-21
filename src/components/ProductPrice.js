import React from 'react';
import '../styles/ProductPrice.css';

const ProductPrice = (props) => {

    return (
        <div className='product-price-container'>
            <p className='product-price'>{props.product.price}</p>
        </div>
    );
}

export default ProductPrice;