import React from 'react';
import star from '../../icons/star.svg'
import { CartContext } from '../../App';
import { Link } from "react-router-dom";
import Counter from './Counter';

export default function CartItems() {
    const { cartItems } = React.useContext(CartContext);
    return (
        <div className="cart-items">
                {cartItems.map((item) => {
                    return (
                        <Link to="product" className="item" key={Math.random(2000)}>
                            <img width={120} height={90} src={item.img} alt={item.alt}  />
                            <div className="wrapper-content">
                                <div className="wrapper-info">
                                    <h3 className="title">{item.title}</h3>
                                    <h4 className="ratting">Ratting {item.ratting} <img src={star} alt="star" /></h4>
                                </div>
                                <div className="row">
                                    <div className="price">{item.price} ₽</div>
                                    <Counter />
                                </div>
                            </div>
                        </Link>
                    )
                })}
        </div>
    )
}
