import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product, liked, onToggleLike, onAddToCart }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-img-wrap">
          <img src={product.image} alt={product.name} className="product-img" />
          {product.tag && <span className="product-tag">{product.tag}</span>}
          <button
            type="button"
            className={`like-btn ${liked.includes(product.id) ? 'liked' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleLike?.(product.id);
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={liked.includes(product.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
        <div className="product-info-card">
          <div className="product-title-row-card">
            <p className="product-name">{product.name}</p>
            <p className="product-price-card">₴{product.price.toLocaleString()}</p>
          </div>
          
        </div>
      </div>
    </Link>
  );
}
