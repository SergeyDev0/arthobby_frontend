import React from "react";
import addCartIcon from "../../icons/product-shopping-cart.svg"

const ProductLiner = () => {
    return (
        <>
            <div className="cartbar">
                <div className="row">
                    <button className="btn__add-cart">
                        <img src={addCartIcon} alt="add cart" />
                    </button>
                    <button className="btn-buy">Купить сейчас</button>
                </div>
            </div>
        </>
    )
}

export default ProductLiner;