import React from 'react';
import '../styles/CartSummary.css';
import listOfProducts from '../list-of-products';

const CartSummary = (props) => {

    const calculateTotalPrice = (itemArray) => {
        console.log(itemArray);
        let total = 0;
        itemArray.forEach((item) => {
            let totalItemPrice = calculateItemPrice(item.sku, item.quantity);
            console.log(totalItemPrice);
            total = total + totalItemPrice;
        })
        return total;
    }

    const getItemPrice = (sku) => {
        const item = listOfProducts.filter(item => item.sku === sku);
        const arrayPrice = item[0].price;
        const price = parseInt((arrayPrice.substring(1)), 10);
        return price;
    }

    const calculateItemPrice = (sku, quantity) => {
        const price = getItemPrice(sku);
        const total = (price * quantity);
        return total;
    }

    return (
        <div className="cart-summary">
            <h2>TOTAL</h2>
            <div className="cart-summary-total-container">
                <p className="cart-summary-total">£{calculateTotalPrice(props.cartItems)}</p>
            </div>
        </div>
    );
}

export default CartSummary;