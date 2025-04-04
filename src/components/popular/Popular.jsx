import React from "react";
import HeaderPopular from "./HeaderPopular";
import CardItem from "./CardItem";
import { CartContext } from "../../App";

export default function Cards() {
  const { onAddToCart, showProduct } = React.useContext(CartContext);
  const [products, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("http://localhost:8080/getAllProducts")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setProducts(json);
  //     });
  // }, []);

  return (
    <div className="popular">
      <HeaderPopular />
      <ul className="slides">
        {products?.map((product, index) => {
          return (
            <CardItem
              key={index}
              img={product.fileName}
              alt={product.name}
              title={product.name}
              price={product.price}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
              onProduct={(obj) => {
                showProduct(obj);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
