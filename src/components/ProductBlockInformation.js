import React from 'react';
import '../styles/ProductBlockInformation.css';

const ProductBlockInformation = (props) => {

    return (
        <div className="product-block-information">
            <h1 className="product-title">{props.product[0].productName}</h1>
            <p className="product-price">{props.product[0].price}</p>
            <button onClick={() => props.addToCart(props.product[0])} className="add-to-bag-button">Add to bag</button>
        </div>
    );
}

export default ProductBlockInformation;