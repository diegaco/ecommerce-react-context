import React, { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../providers/cart/cart.provider';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { toggleCartHidden, itemCount } = useContext(CartContext);
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
