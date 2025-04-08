import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css';

const ProductSlider = (data) => {
    const props = data.data;
    return (
        <div className="product-profile product__wrapper-slider">
            <div className="wrapper-slide"><img className='slide-img' src={props.filename} alt={props.name} /></div>
        </div>
    )
}

export default ProductSlider;