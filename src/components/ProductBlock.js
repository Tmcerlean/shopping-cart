import React from 'react';
import '../styles/ProductBlock.css';
import ProductBlockImage from './ProductBlockImage';
import ProductBlockInformation from './ProductBlockInformation';

const ProductBlock = (props) => {

    return (
        <div className="product-block">
            <ProductBlockImage product={props.product} />
            <ProductBlockInformation product={props.product} addToCart={props.addToCart} />
        </div>
    );
}

export default ProductBlock;
