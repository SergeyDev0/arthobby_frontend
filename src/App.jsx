import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Cart from './pages/CartShop.jsx';
import Product from './pages/Product.jsx';
import Catalog from './pages/Catalog.jsx';
import ResultCatalog from './pages/ResultCatalog.jsx';

export const CartContext = React.createContext([]);

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [productItem, setProductItem] = React.useState([]);
  const [counter, setCounter] = React.useState(1);

  function showProduct(item) {
    setProductItem(item);
  }

  function clearCart() {
    setCartItems([]);
    setCounter(1);
  }

  function decrementCounter() {
    setCounter(counter - 1);

    if(counter <= 1){
        setCounter(1);
    }
  }

  function incrementCounter() {
    setCounter(counter + 1);
    
    if(counter >= 99){
        setCounter(99);
    }
  }

  return (
    <BrowserRouter>
			<CartContext.Provider 
				value={{
					cartItems,
					productItem,
					clearCart,
					decrementCounter,
					incrementCounter,
					showProduct,
					counter
				}}
			>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="result" element={<ResultCatalog />} />
        </Routes>
      </CartContext.Provider>
		</BrowserRouter>
  )
}

export default App;

