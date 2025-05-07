import { useState } from 'react';
import Header from './components/Header'; 
import Introduction from './components/Introduction'; 
import ProductList from './components/ProductList'; 
import ImageCarousel from './components/ImageCarousel'; 
import ArticleList from './components/ArticleList'; 
import BottomBar from './components/BottomBar'; 

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <>
      <Header />
      <Introduction cart={cart} />
      <ImageCarousel />
      <ProductList addToCart={addToCart} />
      <ArticleList />
      <BottomBar />
    </>
  );
}

export default App;
