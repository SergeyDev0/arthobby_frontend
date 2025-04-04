import React from "react";
import ResultCatalogItem from "./ResultCatalogItem";
import { CartContext } from '../../App';

const ResultCatalogList = () => {
    const { onAddToCart, showProduct } = React.useContext(CartContext);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
      fetch('https://63064d8cdde73c0f8457f06d.mockapi.io/hairBand')
      .then((res) => {
          return res.json();
      })
      .then(json => {
          setProducts(json);
      });
    }, []); 

    return(
      <div className="catalog-wrapper">
        {products?.map((item, index) => {
          return (
            <ResultCatalogItem
              key={index}
              img={item.img} 
              alt={item.title} 
              title={item.title}
              price={item.price}
              ratting={item.ratting}
              onPlus={(obj) => {onAddToCart(obj)}}
              onProduct={(obj) => {showProduct(obj)}} 
            />
          )
        })}
      </div>
    )
}

export default ResultCatalogList;