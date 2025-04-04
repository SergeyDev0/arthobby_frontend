import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../App';

const TotalPrice = () => {
    const { cartItems, counter } = React.useContext(CartContext);
    const totalPrice = cartItems.reduce((sum, item) => sum + counter * item.price, 0
    )

    return (
        <div className="wrapper__total-price">
            <div className="row">
                <h3 className="title">Всего:</h3>
                <span className="price">{totalPrice} ₽</span>
            </div>
            {
            cartItems.length === 0 
            ? <Link to="/" className="checkout-button">Вернуться на главную</Link>
            : <button className="checkout-button">Заказать</button>
            }
        </div>
    )
}

export default TotalPrice;