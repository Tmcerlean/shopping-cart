import React from 'react';
import listOfProducts from '../list-of-products';
import '../styles/CartProductItems.css';

const CartProductItems = (props) => {

    const getItemName = (sku) => {
        const item = listOfProducts.filter(item => item.sku === sku);
        const name = item[0].productName;
        return name;
    }

    const getItemPrice = (sku) => {
        const item = listOfProducts.filter(item => item.sku === sku);
        const arrayPrice = item[0].price;
        const price = parseInt((arrayPrice.substring(1)), 10);
        return price;
    }

    const getItemImage = (sku) => {
        const item = listOfProducts.filter(item => item.sku === sku);
        const image = item[0].image;
        return image;
    }

    const calculateItemPrice = (sku, quantity) => {
        const price = getItemPrice(sku);
        const total = (price * quantity);
        return "£" + total;
    }

    return (
        <div className="cart-product-items">
            <div className="cart-product-item-image">
                <img src={getItemImage(props.item.sku)} className="cart-product-image"></img>
            </div>
            <div className="cart-product-item-details">
                <p className="cart-product-item-price">{calculateItemPrice(props.item.sku, props.item.quantity)}</p>
                <p className="cart-product-item-name">{getItemName(props.item.sku)}</p>
                <p className="cart-product-item-quantity">Qty: {props.item.quantity}</p>
                <i class="fas fa-times bin-icon" onClick={() => props.removeSingleItemFromCart(props.item)}></i>
            </div>
        </div>
    );
}

export default CartProductItems;
