import React from 'react';
import '../styles/CartProductList.css';
import CartProductListHeader from './CartProductListHeader';
import CartProductItems from './CartProductItems';

const CartProductList = (props) => {

    const cartItems = props.cartItems.map((item) => {
        return <CartProductItems key={item} item={item} removeSingleItemFromCart={props.removeSingleItemFromCart}/>;
    });

    return (
        <div className="cart-product-list">
            <CartProductListHeader />
            {cartItems}
        </div>
    );
}

export default CartProductList;
