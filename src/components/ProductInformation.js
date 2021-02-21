import React from 'react';
import '../styles/ProductInformation.css';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';

const ProductInformation = (props) => {

    return (
        <div className='product-information'>
            <ProductTitle product={props.product}/>
            <ProductPrice product={props.product}/>
        </div>
    );
}

export default ProductInformation;