import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';

export default function App() {
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((x) => x.id === product.id);
      if (existing) return prev.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  const cartCount = cart.reduce((sum, x) => sum + x.qty, 0);
  const likedCount = liked.length;

  return (
    <div className="app">
      <Header cartCount={cartCount} likedCount={likedCount} scrolled={scrolled} />

      <main className="page-content">
        <Routes>
          <Route
            path="/"
            element={<Home liked={liked} onToggleLike={toggleLike} onAddToCart={addToCart} />}
          />
          <Route
            path="/shop"
            element={<Shop liked={liked} onToggleLike={toggleLike} onAddToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails liked={liked} onToggleLike={toggleLike} onAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
