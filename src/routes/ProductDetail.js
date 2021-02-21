import React from 'react';
import '../styles/ProductDetail.css';
import Breadcrumb from '../components/Breadcrumb';
import listOfProducts from '../list-of-products.js';
import ProductBlock from '../components/ProductBlock';

const ProductDetail = (props) => {

    console.log(props)
  
    const productDetail = listOfProducts.filter(function(product) {
        return product.sku == props.match.params.sku;
    });

    return (
        <div className="product-detail-container">
            <Breadcrumb />
            <ProductBlock product={productDetail} addToCart={props.addToCart} />
        </div>
    );
}

export default ProductDetail;