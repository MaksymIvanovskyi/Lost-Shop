import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../utils/products.js';
import heroImage from '../assets/shoesimage.png';
import './Home.css';

export default function Home({ liked, onToggleLike, onAddToCart }) {
  return (
    <section className="home-page">
      <section className="hero">
        <img src={heroImage} alt="New Collection" className="hero-img" />

        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-label">НОВА КОЛЕКЦІЯ</p>
            <Link to="/shop" className="hero-btn">Купити Зараз</Link>
          </div>
        </div>
      </section>

      <section className="sellers" id="shop">
        <div className="sellers-header">
          <h2 className="sellers-title">OUR BEST SELLERS</h2>
          <p className="sellers-sub">Don't Miss Out</p>
        </div>
        <div className="products-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              liked={liked}
              onToggleLike={onToggleLike}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
