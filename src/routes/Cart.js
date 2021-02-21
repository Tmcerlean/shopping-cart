import React from 'react';
import '../styles/Cart.css';
import CartProductList from '../components/CartProductList';
import CartSummary from '../components/CartSummary';

const Cart = (props) => {

    return (
        <div className="cart-container">
            <CartProductList cartItems={props.cartItems} removeSingleItemFromCart={props.removeSingleItemFromCart}/>
            <CartSummary cartItems={props.cartItems}/>
        </div>
    );
}

export default Cart;