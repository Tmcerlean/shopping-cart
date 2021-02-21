import React from 'react';
import '../styles/ProductImage.css';

const ProductImage = (props) => {

    return (
        <div className="product-image-container">
            <img src={props.product.image} className="product-image"></img>
        </div>
    );
}

export default ProductImage;