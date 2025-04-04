import React from 'react';
import cartIcon from '../../icons/cartIcon.svg';
import { CartContext } from '../../App';

const ClearCart = () => {
    const { clearCart } = React.useContext(CartContext);

    return (
        <button className="clear-btn" onClick={clearCart}>
            <img src={cartIcon} alt="clear cart" />
        </button>
    )
}

export default ClearCart;