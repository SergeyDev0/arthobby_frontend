import React from "react";
import HeaderNewItems from "./HeaderNewItems";
import { CartContext } from "../../App";
import Item from "./Item.jsx";

export default function Items() {
  const { onAddToCart, showProduct } = React.useContext(CartContext);
  // const [products, setProducts] = React.useState([]);
  const [newItems, setNewItems] = React.useState([]);

  const obj = {
    name: "Светильник цветок",
    price: "1300",
    fileName: "img/ceddJKm7.webp",
    type: "Светильник",
    article: "ceddJKm7",
    material: "Фаомиран, пластик и др.",
    size: "50 см",
  };

  React.useEffect(() => {
    fetch("https://arthobby-backend.ddns.net/getPopularProducts")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setNewItems(json);
        console.log(json);
      });
  }, []);

  // React.useEffect(() => {
  //   fetch("https://arthobby-backend.ddns.net/filterByDate")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setNewItems(json);
  //     });
  //
  // 		async function saveData() {
  // 			await fetch("https://arthobby-backend.ddns.net/saveProduct", {
  // 				method: "POST",
  // 				headers: {
  // 					"Content-Type": "application/json",
  // 				},
  // 				body: JSON.stringify(obj),
  // 			});
  // 		}
  //    // saveData()
  // }, []);

  return (
    <div className="new-items">
      <HeaderNewItems />
      <ul className="slides">
        {newItems?.map((item, index) => {
          if (index < 10) {
            return (
              <Item
                id={item.id}
                img={item.fileName}
                alt={item.name}
                title={item.name}
                price={item.price}
                onPlus={(obj) => {
                  onAddToCart(obj);
                }}
                onProduct={(obj) => {
                  showProduct(obj);
                }}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
