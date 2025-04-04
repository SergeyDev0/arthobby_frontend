import React from 'react';
import { Link } from "react-router-dom";
import shoppingCartIcon from '../../icons/shopping-cart.svg'

const Cart = () => {
    return (
        <Link to='/cart'>
            <button className="header-menu">
                <img width={26} height={26} src={shoppingCartIcon} alt="cart" />
            </button>
        </Link>
    )
}

export default Cart;