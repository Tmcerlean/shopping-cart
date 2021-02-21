import React from 'react';
import '../styles/Product.css';
import ProductImage from './ProductImage';
import ProductInformation from './ProductInformation';
import {Link} from 'react-router-dom';

const Product = (props) => {

    return (
        <div className='product'>
            <Link to={`/shop/${props.product.sku}`}>
                <ProductImage product={props.product}/>
                <ProductInformation product={props.product}/>
            </Link>
        </div>
    );
}

export default Product;