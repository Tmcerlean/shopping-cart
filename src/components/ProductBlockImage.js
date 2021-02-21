import React from 'react';
import '../styles/ProductBlockImage.css';

const ProductBlockImage = (props) => {

    return (
        <div className="product-block-image-container">
            <img src={props.product[0].image} className="product-block-image"></img>
        </div>
    );
}

export default ProductBlockImage;
