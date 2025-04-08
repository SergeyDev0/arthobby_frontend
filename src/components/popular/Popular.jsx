import React from "react";
import HeaderPopular from "./HeaderPopular";
import CardItem from "./CardItem";
import { CartContext } from "../../App";

export default function Cards() {
  const { onAddToCart, showProduct } = React.useContext(CartContext);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://arthobby-backend.ddns.net/getPopularProducts")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProducts(json);
				console.log(json)
      });
  }, []);

  return (
    <div className="popular">
      <HeaderPopular />
      <ul className="slides">
        {products?.map((product, index) => {
          return (
            <CardItem
              key={product.id}
							id={product.id}
              img={product.filename}
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
