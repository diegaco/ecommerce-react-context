import React, { createContext, useState, useEffect } from 'react'
import { addItemToCart, removeItemFromCart, getCartItemsCount, getCartTotal } from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleCartHidden: () => { },
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => { },
  itemCount: 0,
  total: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setCartItemsCount] = useState(0);
  const [total, setCartTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = item => setCartItems(() => cartItems.filter(cartItem => cartItem.id !== item.id ))
  const toggleCartHidden = () => setHidden(!hidden);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={{ hidden, toggleCartHidden, cartItems, addItem, removeItem, clearItem, itemCount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;