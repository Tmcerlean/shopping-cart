import React from 'react';
import '../styles/ProductTitle.css';

const ProductTitle = (props) => {

    return (
        <div className='product-title-container'>
            <p className='product-title'>{props.product.productName}</p>
        </div>
    );
}

export default ProductTitle;