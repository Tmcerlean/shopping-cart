import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart";
import ProductDetail from "./routes/ProductDetail";

const Routes = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems); 
  }, [cartItems]);

  const changeQuantity = (sku, delta) => {
    setCartItems(
      cartItems.map(
        (item) => (item.sku === sku ? { ...item, quantity: item.quantity + delta } : item)
      )
    );
  };

  const addToCart = (newItem) => {

    // If cart is empty then add to cart
    if (cartItems.length === 0) {
      setCartItems([{
        sku: newItem.sku,
        quantity: 1
      }])
    } else {
      // Check if item in cart already
      const checkInCart = cartItems
      .map((cItem) => cItem.sku)
      .includes(newItem.sku);
      // If item is in the cart then add 1
      if (checkInCart) {
        changeQuantity(newItem.sku, 1);
      } else {
      // If not then add new item
        setCartItems([
          ...cartItems, 
          {
            sku: newItem.sku,
            quantity: 1
        }]);
      }
    }
  };
  
  const removeSingleItemFromCart = (item) => {

    // Check if item in cart already
    const checkInCart = cartItems
    .map((cItem) => cItem.sku)
    .includes(item.sku);

    // If item is in the cart then remove 1
    if (checkInCart) {
      changeQuantity(item.sku, -1);
    };

    // Check if quantity = 0
    // If quantity = 0 then pass item to remove item
  };

  return (
    <BrowserRouter>
        <Nav cartItems={cartItems} />
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/shop" component={Shop} />
            <Route 
              path="/cart" 
              render={(props) => (
                <Cart
                  {...props}
                  cartItems={cartItems}
                  removeSingleItemFromCart={removeSingleItemFromCart}
                />
              )}
            />
            <Route
              path='/shop/:sku'
              render={(props) => (
                <ProductDetail
                  {...props}
                  addToCart={addToCart}
                />
              )}
            />
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;