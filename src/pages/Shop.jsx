import { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { products, maxStorePrice } from '../utils/products.js';
import './Shop.css';

export default function Shop({ liked, onToggleLike, onAddToCart }) {
  const [sortBy, setSortBy] = useState('price-desc');
  const [sortOpen, setSortOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('Чорний');
  const [selectedSize, setSelectedSize] = useState('M');
  const [priceRange, setPriceRange] = useState({ min: 0, max: maxStorePrice });
  const [filtersVisible, setFiltersVisible] = useState(false);

  const getSortLabel = () => {
    switch (sortBy) {
      case 'price-desc':
        return 'За ціною по спаданню';
      case 'price-asc':
        return 'За ціною по зростанню';
      case 'popular':
        return 'Найпопулярніше';
      default:
        return 'За ціною по спаданню';
    }
  };

  const filteredProducts = products.filter((product) => product.price >= priceRange.min && product.price <= priceRange.max);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-desc':
        return b.price - a.price;
      case 'price-asc':
        return a.price - b.price;
      case 'popular':
        return a.id - b.id;
      default:
        return 0;
    }
  });

  return (
    <section className="store-page">
      <div className="store-heading">
        <div>
          <h1 className="hero-title">Огляд товарів</h1>
        </div>
      </div>
      <div className={`store-body ${filtersVisible ? 'has-filters' : ''}`}>
        <aside className={`store-filters ${filtersVisible ? 'visible' : ''}`}>
          <div className="filter-header">
            <h3>Фільтри</h3>
          </div>
          <div className="filter-group">
            <button
              type="button"
              className="filter-title-button"
              onClick={() => setSortOpen((prev) => !prev)}
            >
              Впорядкувати за: {getSortLabel()}
            </button>
            {sortOpen && (
              <div className="sort-options">
                <button
                  type="button"
                  className={`sort-option ${sortBy === 'price-desc' ? 'active' : ''}`}
                  onClick={() => {
                    setSortBy('price-desc');
                    setSortOpen(false);
                  }}
                >
                  За ціною по спаданню
                </button>
                <button
                  type="button"
                  className={`sort-option ${sortBy === 'price-asc' ? 'active' : ''}`}
                  onClick={() => {
                    setSortBy('price-asc');
                    setSortOpen(false);
                  }}
                >
                  За ціною по зростанню
                </button>
                <button
                  type="button"
                  className={`sort-option ${sortBy === 'popular' ? 'active' : ''}`}
                  onClick={() => {
                    setSortBy('popular');
                    setSortOpen(false);
                  }}
                >
                  Найпопулярніше
                </button>
              </div>
            )}
          </div>

          <div className="filter-group filter-accordion">
            <button
              type="button"
              className="filter-accordion-header"
              onClick={() => setColorOpen((prev) => !prev)}
            >
              Колір
              <span>{colorOpen ? '−' : '+'}</span>
            </button>
            {colorOpen && (
              <div className="filter-accordion-panel">
                <div className="filter-tags">
                  {['Чорний', 'Білий', 'Червоний', 'Сірий'].map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`filter-chip ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="filter-group filter-accordion">
            <button
              type="button"
              className="filter-accordion-header"
              onClick={() => setSizeOpen((prev) => !prev)}
            >
              Розмір
              <span>{sizeOpen ? '−' : '+'}</span>
            </button>
            {sizeOpen && (
              <div className="filter-accordion-panel">
                <div className="filter-tags">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`filter-chip ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="filter-group filter-accordion">
            <button
              type="button"
              className="filter-accordion-header"
              onClick={() => setPriceOpen((prev) => !prev)}
            >
              Ціна
              <span>{priceOpen ? '−' : '+'}</span>
            </button>
            {priceOpen && (
              <div className="filter-accordion-panel">
                <div className="filter-range-row">
                  <label>
                    Від
                    <input
                      type="range"
                      min="0"
                      max={maxStorePrice}
                      value={priceRange.min}
                      onChange={(e) => setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))}
                    />
                    <span>₴{priceRange.min.toLocaleString()}</span>
                  </label>
                </div>
                <div className="filter-range-row">
                  <label>
                    До
                    <input
                      type="range"
                      min="0"
                      max={maxStorePrice}
                      value={priceRange.max}
                      onChange={(e) => setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))}
                    />
                    <span>₴{priceRange.max.toLocaleString()}</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          

          <button type="button" className="filter-link">Переглянути останні новинки</button>
        </aside>
        <div className="store-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-wrapper">
              <ProductCard
                product={product}
                liked={liked}
                onToggleLike={onToggleLike}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="filter-toggle-main-button"
          onClick={() => setFiltersVisible((prev) => !prev)}
        >
          {filtersVisible ? 'ПРИХОВАТИ' : 'ФІЛЬТРУВАТИ'}
        </button>
      </div>
    </section>
  );
}
