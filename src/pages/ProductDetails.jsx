import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../utils/products.js';
import './ProductDetails.css';

export default function ProductDetails({ onToggleLike, onAddToCart, liked }) {
  const { id } = useParams();
  const product = getProductById(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

  // Mock data for multiple images and sizes (in real app this would come from product data)
  const productImages = [product?.image, product?.image, product?.image]; // Mock multiple images
  const availableSizes = ['S', 'M', 'L', 'XL'];
  const isInStock = true; // Mock availability

  if (!product) {
    return (
      <section className="product-page">
        <div className="page-not-found">
          <h2>Товар не знайдено</h2>
          <Link to="/shop" className="hero-btn">Повернутись до магазину</Link>
        </div>
      </section>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section className="product-page">
      <div className="product-details-layout">
        {/* Left side - Image carousel */}
        <div className="product-images">
          <div className="image-carousel">
            <img
              src={productImages[currentImageIndex]}
              alt={product.name}
              className="product-main-image"
            />

            {/* Navigation arrows */}
            <button
              className="image-nav-arrow image-nav-prev"
              onClick={prevImage}
              type="button"
            >
              ‹
            </button>
            <button
              className="image-nav-arrow image-nav-next"
              onClick={nextImage}
              type="button"
            >
              ›
            </button>

            {/* Image indicators */}
            <div className="image-indicators">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  className={`image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Product info */}
        <div className="product-info">
          <div className="product-title-row product-page-title-row">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">₴{product.price.toLocaleString()}</p>
          </div>

          <div className="product-availability">
            <span className={`availability-status ${isInStock ? 'in-stock' : 'out-of-stock'}`}>
              {isInStock ? '✓ В наявності' : '✗ Немає в наявності'}
            </span>
          </div>

          <div className="product-sizes">
            <h3 className='product-sizes-text'>Розмір</h3>
            <div className="size-options">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Delivery Information */}
          <div className="product-delivery-info">
            <div className="delivery-option">
              <svg className="delivery-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <div className="delivery-text">
                <span className="delivery-title">Отримання в магазині</span>
                <span className="delivery-price">БЕЗКОШТОВНО</span>
              </div>
            </div>
            <div className="delivery-option">
              <svg className="delivery-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.5v-7c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M22 12h-6l-2 3h-4l-2-3H2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M5 5l1.5-3h11L19 5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <div className="delivery-text">
                <span className="delivery-title">Стандартна доставка додому</span>
                <span className="delivery-price">від 1,999 грн БЕЗКОШТОВНО</span>
              </div>
            </div>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-actions">
            <button
              className="add-to-cart-btn"
              type="button"
              onClick={() => onAddToCart(product)}
              disabled={!isInStock}
            >
              Додати в кошик
            </button>
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

          <Link to="/shop" className="back-to-shop-btn">
            ← Повернутись до магазину
          </Link>
        </div>
      </div>
    </section>
  );
}