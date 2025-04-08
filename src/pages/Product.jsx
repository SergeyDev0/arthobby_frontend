import React from 'react';
import Header from '../components/header/Header';
import ProductSlider from "../components/product/ProductSlider"
import ProductInfo from "../components/product/ProductInfo"
import ProductLiner from "../components/product/ProductLiner"
import { useParams } from 'react-router-dom';

const Product = () => {
    const [productData, setProductData] = React.useState({})
    const {id} = useParams()
    const link = `https://arthobby-backend.ddns.net/getProduct/${id}` 

    React.useEffect(() => {
        async function fetchDataProduct() {
            const response = await fetch(link);
            const json = await response.json();
            setProductData(json)
        }
        fetchDataProduct()
    }, [])

return (
    <div className="wrapper-product">
        <Header />
        {!null && <ProductSlider data={productData} />} 
        {!null && <ProductInfo data={productData} />}
        <ProductLiner />
    </div>
) 
}

export default Product;