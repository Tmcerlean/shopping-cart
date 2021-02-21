import React from 'react';
import '../styles/Shop.css';
import CategoryHeader from '../components/CategoryHeader';
import Breadcrumb from '../components/Breadcrumb';
import ProductList from '../components/ProductList';
import ProductCounter from '../components/ProductCounter';

const Shop = () => {

    return (
        <div className="shop-container">
            <Breadcrumb />
            <CategoryHeader category='Shop' />
            <ProductCounter />
            <ProductList />
        </div>
    );
}

export default Shop;