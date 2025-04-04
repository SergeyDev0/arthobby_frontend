import React from "react";

const ProductInfo = (data) => {
    const props = data.data;
    return (
        <div className="product-info" key={props.id}>
            <div className="product__profile-info">
                <div className="row">
                    <h2 className="product-title">{props.name}</h2> 
                    <h3 className="product-price">{props.price}&nbsp;₽</h3>
                </div>
            </div>    
        </div>
    )
}

export default ProductInfo;